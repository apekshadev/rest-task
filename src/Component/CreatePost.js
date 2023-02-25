import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {useDispatch } from 'react-redux';
import { createPost } from '../Services/api';
const CreatePost = () => {
    const [newPost, setNewPost] =  useState({ title:" ", body:" "})
    const dispatch = useDispatch();
    const navigate = useNavigate();
 
  const  handleInput =(e)=>{
    const {name, value} = e.target;
    setNewPost({...newPost,[name]:value})
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    dispatch(createPost({title:newPost.title, body:newPost.body}))
    navigate("/")
   
  }

  return (
    <div  className="container" >
    <h2>Create New Post</h2>
  <form onSubmit={handleSubmit}>
    <div className='form-group'>
        <label id='title'>Title</label>
        <input 
            name='title'
            type="text" 
            htmlFor="title"
            value={newPost.title}
            placeholder='enter title'
            onChange={handleInput}
            />
    </div>
    <div className='form-group'>
        <label id='title'>Body</label>
        <textarea 
            name='body'
            type="text" 
            htmlFor="body"
            value={newPost.body} 
            placeholder='enter description'
            onChange={handleInput}
            />
    </div>
    <div className='form_action'>
      <button  className='btn' type='submit'>Submit</button>
      <button className='btn' onClick={()=>navigate("/")}>Cancle</button>
    </div>
  
  </form>
  </div>
  
  )
}

export default CreatePost