import React from 'react'
import PostListing from './Component/PostListing'
import CreatePost from "./Component/CreatePost"

import {Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <Routes>
      <Route path ="" element={<PostListing/>}/>
      <Route path ="/create" element={<CreatePost/>}/>
    </Routes>
   
  )
}

export default App