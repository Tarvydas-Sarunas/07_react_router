import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AddPost() {

  const [inputsObj, setInputsObj] = useState({
    title: 'Cia yra title',
    author: 'James Band',
    tags: [],
    body: '',
  })

function handleTitleInput(e) {
  const reiksme = e.target.value
  setInputsObj({...inputsObj, title: reiksme})
}
function handleAuthorInput(e) {
  const reiksme = e.target.value
  setInputsObj({...inputsObj, author: reiksme})
}
function handleTagsInput(e) {
  const reiksme = [e.target.value]
  setInputsObj({...inputsObj, tags: reiksme})
}
function handleTextareaInput(e) {
  const reiksme = e.target.value
  setInputsObj({...inputsObj, body: reiksme})
}


  function handleNewPostFormSubmit(e) {
    e.preventDefault()

    console.log('react i in control ');
    console.log('inputsObj ===', inputsObj.title);
    console.log('inputsObj ===', inputsObj.author);
    console.log('inputsObj tags ===', inputsObj.tags);
    console.log('inputsObj ===', inputsObj.body);
    console.log('inputsObj ===', inputsObj.tags.length);
    // kai siusime noresime kad tags butu un array

    // console;log final obj
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
        <span>Tags</span>
        <input value={inputsObj.tags} onChange={handleTagsInput} type="text" placeholder='Add comma separated tags'/>
      </label>
      <label>
        <span>Body</span>
        <textarea value={inputsObj.text} onChange={handleTextareaInput} cols="30" rows="10"></textarea>
      </label>
      <button className='btn' type='submit'>Create post</button>
     </form>
    </div>
  )
}
