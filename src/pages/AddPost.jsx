import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AddPost() {

  const [inputsObj, setInputsObj] = useState({
    title: 'Cia yra title',
    author: 'James Band',
    tags: 'blue, yellow, red,green',
    body: '',
  })

function hundleInput(e) {
const {value, name} = e.target
setInputsObj({...inputsObj, [name]: value})
}

function handleTitleInput(e) {
  const reiksme = e.target.value
  const inputKey = e.target.id
  setInputsObj({...inputsObj, [inputKey]: reiksme})
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
    console.log('inputsObj title ===', inputsObj);
    // kai siusime noresime kad tags butu un array
const finalObj = {
  ...inputsObj, tagai: inputsObj.tags.split(',').map((str) => str.trim()).filter((str) => str.length > 0)
}
delete finalObj.tags
    // console;log final obj
    console.log('finalObj ===', finalObj);
  }

  return (
    <div className='container'>
      <h1>Create Post</h1>
      <Link to={'/'}>Back to Home</Link>

     <form onSubmit={handleNewPostFormSubmit} className='add-post-form'>
      <label>
        <span>Title</span>
        <input value={inputsObj.title} onChange={hundleInput} name='title' type="text" placeholder='Title'/>
      </label>
      <label>
        <span>Author</span>
        <input value={inputsObj.author} onChange={hundleInput} name='author' type="text" placeholder='Author'/>
      </label>
      <label>
        <span>Tags</span>
        <input value={inputsObj.tags} onChange={hundleInput} name='tags' type="text" placeholder='Add comma separated tags'/>
      </label>
      <label>
        <span>Body</span>
        <textarea value={inputsObj.body} onChange={hundleInput} name='body' cols="30" rows="10"></textarea>
      </label>
      <button className='btn' type='submit'>Create post</button>
     </form>
    </div>
  )
}
