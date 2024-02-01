import React from 'react'
import { Link } from 'react-router-dom'

export default function AddPost() {

  /**
   * 
   * @param {SubmitEvent} e 
   */
  function handleNewPostFormSubmit(e) {
    e.preventDefault()

    console.log('react i in control ');
  }

  return (
    <div className='container'>
      <h1>Create Post</h1>
      <Link to={'/'}>Back to Home</Link>

     <form onSubmit={handleNewPostFormSubmit} className='add-post-form'>
      <label>
        <span>Title</span>
        <input type="text" placeholder='Title'/>
      </label>
      <label>
        <span>Author</span>
        <input type="text" placeholder='Author'/>
      </label>
      <label>
        <span>Body</span>
        <textarea cols="30" rows="10"></textarea>
      </label>
      <button className='btn' type='submit'>Create post</button>
     </form>
    </div>
  )
}
