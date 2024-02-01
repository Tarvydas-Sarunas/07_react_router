import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AddPost() {

  const [inputsObj, setInputsObj] = useState({
    title: 'Cia yra title',
    author: 'James Band',
  })

function handleTitleInput(e) {
  const reiksme = e.target.value
  setInputsObj({...inputsObj, title: reiksme})
}
function handleAuthorInput(e) {
  const reiksme = e.target.value
  setInputsObj({...inputsObj, author: reiksme})
}

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
        <input value={inputsObj.title} onChange={handleTitleInput} type="text" placeholder='Title'/>
      </label>
      <label>
        <span>Author</span>
        <input value={inputsObj.author} onChange={handleAuthorInput} type="text" placeholder='Author'/>
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
