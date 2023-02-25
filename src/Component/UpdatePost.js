import React from 'react'

const UpdatePost = ({updatedPost,handleInput,setIsEdit,handleSave}) => {
return (
    <div  className="container" >
    <h2>Update Post</h2>
  <form onSubmit={handleSave}> 
    <div className='form-group'>
        <label id='title'>Title</label>
        <input 
            name='title'
            type="text" 
            htmlFor="title"
            value={updatedPost.title}
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
            value={updatedPost.body} 
            placeholder='enter description'
            onChange={handleInput}
            />
    </div>
    <div className='form_action'>
      <button className='btn' type='submit'>save</button>
    </div>
  
  </form>
  </div>
  
  )
}

export default UpdatePost