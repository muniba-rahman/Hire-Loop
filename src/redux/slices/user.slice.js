//this slice will hold the user data
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authServices from "../../axios/services/auth.service";

const initialState = {
  data: {},
  token: null, //this is the JWT Access token that will be verified to make sure user can login
};

const login = createAsyncThunk("user/login", async (loginForm, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await authServices.login(loginForm);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      console.log("login fulfillled ===>", payload);
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      console.log("login error ===>", payload);
    });
  },
});

export default user.reducer;
