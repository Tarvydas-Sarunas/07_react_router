import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'

export default function SinglePost() {
const {postId} = useParams()
// console.log('params ===', params);

// parsiusti objecka is musu damy json su id postId
const [singlePostObj, setSinglePostArr] = useState({}) 

let [sercheParams, setSercheParams ] = useSearchParams()

useEffect(() => {
  getSinglePosts();
}, [])

function getSinglePosts() {
axios
.get(`https://dummyjson.com/posts/${postId}`)
.then((resp) => {
  console.log('resp ===', resp);
  setSinglePostArr(resp.data)
})
.catch(error => {
  console.warn('ivyko klaida:', error);
})
}
// 'https://dummyjson.com/posts/{postId}'
// ir supildyti jo html



  return (
    <div className='container card'>
      <p>id: {singlePostObj.id}</p>
      <h1>{singlePostObj.title}</h1>
          <p>{singlePostObj.body}</p>
          <p>likes: {singlePostObj.reactions}</p>
          <p>{singlePostObj.tags?.join(', ')}</p>
          <Link className='btn' to={`/posts/`}>Go Back</Link>
      </div>
  )
}
