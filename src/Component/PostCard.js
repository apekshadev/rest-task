import React from 'react'

const PostCard = ({post,deletePost,editPost}) => {
  return (
    <div className='card'>
    <h3>{post.title} </h3>
    <p>{post.body}</p>
    <button className='btn btn_err' onClick={()=> deletePost(post.id)}>Delete</button>
    <button className='btn btn_success' onClick={()=>editPost(post.id)}>Update</button>
    
  </div>
  )
}

export default PostCard