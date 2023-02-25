import {createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const BASE_URL = "https://jsonplaceholder.typicode.com/posts"

export const createPost = createAsyncThunk('createPost', async (newPost) => {
  const response = await axios.post(`${BASE_URL}`, newPost);
  return response.data;

 
});

export const updatePost = createAsyncThunk('updatePost', async (id, title, body) => {
  const response = await axios.put(`${BASE_URL}/${id}`,{id, title, body});
  return response.data;
});


export const deletePost = createAsyncThunk('deletePost', async (postId) => {
  await axios.delete(`${BASE_URL}/${postId}`);
  return postId;
});

 export const fetchPosts = createAsyncThunk('fetchPosts', async (page) => {
 const response = await axios.get(`${BASE_URL}?_start=${(page - 1) * 5}&_limit=5`);
  const totalCount = response.headers.get('x-total-count');
  const totalPages = Math.ceil(totalCount / 5);
  const posts = response.data;
   return { posts, totalPages };
});




