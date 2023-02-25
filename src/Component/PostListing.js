import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts,deletePost, updatePost } from '../Services/api';
import {useNavigate} from "react-router-dom"
import PostCard from "./PostCard"
import Pagination from "./Pagination"
import UpdatePost from './UpdatePost';
function PostListing() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {posts, currentPage} = useSelector((state)=>state.posts)
  
  const[isEdit, setIsEdit] = useState(false);
  const [updatedPost, setUpdatedPost] = useState({title:posts.title, body:posts.body})

  //Delete post
  const handleDeletePost = (postId) => {
     dispatch(deletePost(postId));
  };
 
  const handleInput =(e)=>{
    const {name, value}= e.target;  
    setUpdatedPost({[name]:value}) 
}
 //Updated post 
  const handleSave =(e,id)=>{
    e.preventDefault();
  dispatch(updatePost({ id, title:updatedPost.title, body:updatedPost.body }))
  setIsEdit(!isEdit);
  }
  const handleEditPost=()=>{
    setIsEdit(!isEdit);
 }

 useEffect(() => {
  dispatch(fetchPosts(currentPage));
}, [dispatch,currentPage]);
  
  return (<div className='container'>
              {isEdit ? <UpdatePost 
                          updatedPost={updatedPost} 
                          handleInput={handleInput} 
                          setIsEdit={setIsEdit}
                          handleSave={handleSave}/> : null}
              {!isEdit ?(<div>
                          <button className='btn' onClick={()=>navigate("/create")}>Create New</button>
                        </div>) : null}
            
              <div className='card_container'>
              {posts.map((post) => (
                  <PostCard 
                    key={post.id}
                    post={post} 
                    deletePost={handleDeletePost} 
                    editPost={handleEditPost}
                    />
                ))}
              </div>
              <Pagination />
          </div>
  );
}

export default PostListing;
