import { createSlice} from '@reduxjs/toolkit';
import { fetchPosts,deletePost,createPost,updatePost} from '../../../Services/api';


const postsSlice = createSlice({
  name: 'posts',
  initialState: { 
    posts: [], 
    currentPage: 1,
    totalPages: null, 
},
    reducers: {
      setCurrentPage(state, action) {
        state.currentPage = action.payload;
      },
    },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
        state.totalPages = action.payload.totalPages;
      })  
      .addCase(deletePost.fulfilled, (state, action) => {
        const index = state.posts.findIndex((post) => post.id === action.payload);
        if (index !== -1) { 
          state.posts.splice(index, 1);
        }
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
    
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const { id, title, body } = action.payload;
        const updatedPostIndex = state.posts.findIndex(post => post.id === id);
        if (updatedPostIndex !== -1) {
          state.posts[updatedPostIndex] = { id, title, body };
        }
      })
    
  }
});
export const { setCurrentPage} = postsSlice.actions;
export default postsSlice.reducer;