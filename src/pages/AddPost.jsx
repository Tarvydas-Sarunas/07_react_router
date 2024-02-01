import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const postsUrl = 'https://dummyjson.com/posts/add'

export default function AddPost() {

  const [inputsObj, setInputsObj] = useState({
    title: 'Cia yra title',
    author: 'James Band',
    tags: 'blue, yellow, red,green',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit explicabo quod sapiente aliquam excepturi, perferendis quia exercitationem ipsam ratione nostrum!',
    userId: 5,
  })

  const [errorMsg, setErrorMsg] = useState('')
const [okMsg, setOkMsg] = useState('')

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

    sendToBackEnd(finalObj)
  }

  async function sendToBackEnd(whatToSend) {

try {
  const resp = await fetch(postsUrl, {
  method: 'POST',
  headers: { 'Content-type': 'application/json' },
  body: JSON.stringify(whatToSend)
})
console.log('resp ===', resp);
showOk(resp)
const postResult = await resp.json()
console.log('postResult ===', postResult);
showError(postResult)

} catch (error) {
  console.warn('sendToBackEnd error ===', error);
}
  }

  function showError(errorMsg) {
const msg = errorMsg.message
setErrorMsg(msg)
  }

  function showOk(okMsge) {
if(okMsge.status === 200) {
  const message = 'Your post was send'
  return setOkMsg(message)
}
setOkMsg(okMsg)
  }
  console.log('okMsg ===', okMsg);
  return (
    <div className='container'>
      <h1>Create Post</h1>
      {errorMsg && <h3 className='error'>{errorMsg}</h3>}
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
      {okMsg && <h3 className='success'>{okMsg}</h3>}
      <button className='btn' type='submit'>Create post</button>
     </form>

    </div>
  )
}
