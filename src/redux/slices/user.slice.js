//this slice will hold the user data
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authServices from "../../axios/services/auth.service";

const initialState = {
  data: {},
  token: null, //this is the JWT Access token that will be verified to make sure user can login
};

export const login = createAsyncThunk(
  "user/login",
  async (loginForm, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await authServices.login(loginForm); //call the login api post request and sendthe login form
      if (response.data.accessToken) {
        const authenticate = await authServices.authenticate(
          response.data.accessToken
        ); //authentication is performed before access is given
        if (authenticate.data?.message === "AUTHENTIC") {
          return response.data; //user data is sent as response so that it can be updated in state and user can log in
        } else {
          return rejectWithValue({ error: "UNAUTHORIZED" });
        }
      } else {
        return rejectWithValue({ error: "Access Token Not Recieved" }); //login api error
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue({ error: error.response.data }); //response error
    }
  }
);

export const validateToken = createAsyncThunk(
  "user/validateToken",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const {
      user: { token },
    } = getState();
    try {
      const authenticate = await authServices.authenticate(token); //authentication is performed before access is given
      if (authenticate.data?.message === "AUTHENTIC") {
        return; //user data is sent as response so that it can be updated in state and user can log in
      } else {
        return rejectWithValue({ error: "UNAUTHORIZED" });
      }
    } catch (error) {
      return rejectWithValue({ error: error.response.data }); //response error
    }
  }
);

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = {};
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.data = payload.user;
      state.token = payload.accessToken;
    });
    builder.addCase(login.rejected, (state, action) => {});
    builder.addCase(validateToken.rejected, (state, action) => {
      state.data = {};
      state.token = null;
    });
  },
});

export const { logout } = user.actions;

export default user.reducer;
