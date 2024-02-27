import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";

export const fetchData = createAsyncThunk(
    
  "crudApp/fetchData",
  async (id) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts${
          id ? "?userId=" + id : ""
        }`
      );
      
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);


export const createPost = createAsyncThunk(
  "crudApp/createPost",
  async ({ title, body, userId}) => {
    try {
      const response = await axios.post(
        `https://jsonplaceholder.typicode.com/posts`,
        {
          title,
          body,
          userId,
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const updatePost = createAsyncThunk(
  "crudApp/createPost",
  async ({ title, body, userId,id}) => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          id,
          title,
          body,
          userId,
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);


export const deletePost = createAsyncThunk(
    "crudApp/deletePost",
    async (postId) => {
      try {
        const response = await axios.delete(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        return response.data;
      } catch (error) {
        throw error;
      }
    }
  );

const crudSlice = createSlice({
  name: "crudApp",
  initialState: {
    data: null,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.data = null;
        state.error = false;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.error = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.data = null;
        state.error = true;
      })
      // .addCase(createPost.pending, (state) => {
      //   state.data = null;
      //   state.error = false;
      // })
      // .addCase(createPost.fulfilled, (state, action) => {
      //   state.data = action.payload;
      //   state.error = false;
      // })
      // .addCase(createPost.rejected, (state, action) => {
      //   state.data = null;
      //   state.error = true;
      // })
      // .addCase(deletePost.pending, (state) => {
      //   state.data = null;
      //   state.error = false;
      // })
      // .addCase(deletePost.fulfilled, (state, action) => {
      //   // Here you can handle the fulfilled action, maybe update the state or show a message
      //   // For example, you might remove the deleted post from the state if you're keeping a list of posts
      // })
      // .addCase(deletePost.rejected, (state, action) => {
      //   // Handle the case where the delete request failed
      //   state.error = true;
      // });
      // .addCase(updatePost.pending, (state) => {
      //   state.error = false;
      // })
      // .addCase(updatePost.fulfilled, (state, action) => {

      //   state.error = false;
      // })
      // .addCase(updatePost.rejected, (state, action) => {
       
      //   state.error = false;
      // })
  },
});

export default crudSlice.reducer;
