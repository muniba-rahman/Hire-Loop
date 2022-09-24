//this slice will hold all blogs the user creates or has accessed.
import blogServices from "../../axios/services/blog.service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  userBlogs: [],
  loader: null,
  error: null,
};

export const getBlogList = createAsyncThunk(
  "blog/getBlogList",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const {
      blog: { blogs },
    } = getState(); // retrieves blogs array from state.
    try {
      const response = await blogServices.getBlogList(blogs?.length || 0); //blogs.length is the current number of records the user has saved
      if (response.data.length) {
        return response.data;
      } else {
        return rejectWithValue({
          message: "ERROR",
          error: "Unable to find blogs",
        });
      }
    } catch (error) {
      return rejectWithValue({ error: error }); //response error
    }
  }
);

const blog = createSlice({
  name: "blog",
  initialState,
  reducers: {
    deleteBlogs: (state) => {
      state.blogs = [];
      state.userBlogs = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBlogList.fulfilled, (state, action) => {
      state.blogs = [...state.blogs, ...action.payload];
    });
    builder.addCase(getBlogList.rejected, (state, action) => {});
  },
});

export const { deleteBlogs } = blog.actions;

export default blog.reducer;
