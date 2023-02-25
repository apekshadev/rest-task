
import { configureStore } from '@reduxjs/toolkit'
import postReducer from "./redux/features/post/postsSlice"

export const store = configureStore({
  reducer: {
    posts: postReducer,
  },
})