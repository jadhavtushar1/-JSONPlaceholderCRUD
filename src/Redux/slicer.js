import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
        return postId;
      } catch (error) {
        throw error;
      }
    }
  );

const crudSlice = createSlice({
  name: "crudApp",
  initialState: {
    data: [],
    error: false,
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
       
        state.error = false;
      });
      builder.addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.error = false;
      });
      builder.addCase(fetchData.rejected, (state, action) => {
        state.data = [];
        state.error = true;
      });
      builder.addCase(deletePost.pending, (state) => {
        // state.data = null;
        state.error = false;
      });
      builder.addCase(deletePost.fulfilled, (state, action) => {
        const newData = state.data.filter((element)=> element.id !== action.payload)
        
        state.data = newData
      })
      builder.addCase(deletePost.rejected, (state, action) => {
        state.error = true;
      });
      
  },
});

export default crudSlice.reducer;
