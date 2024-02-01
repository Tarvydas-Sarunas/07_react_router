import axios from 'axios';
import React, { useEffect, useState } from 'react'

const postObj = {
    "id": 1,
    "title": "His mother had always taught him",
    "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    "userId": 9,
    "tags": [
        "history",
        "american",
        "crime"
    ],
    "reactions": 2
  }

export default function PostPage() {
const [mainPostArr, setMainPostArr] = useState([])
useEffect(() => {
  getPosts();
}, [])

function getPosts() {
axios
.get('https://dummyjson.com/posts')
.then((resp) => {
  console.log('resp ===', resp)
const dataBack = resp.data
console.log('dataBack ===', dataBack);
setMainPostArr(dataBack.posts)
})
.catch(error => {
console.warn('ivyko klaida:', error);
})
}

  return (
    <div className='container'>
      <h1>Posts Page</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt doloremque voluptate explicabo similique est quis! Officiis maxime doloribus unde, eos quae sint, velit quis reprehenderit tempore ipsum error eum alias!</p>
      <ul className='unlisted grid'>
      {mainPostArr.map((pObj) => 
      <li key={pObj.id} className="card">
          <p>id: {pObj.id}</p>
          <h2>{pObj.title.slice(0, 15)}...</h2>
          <p>{pObj.body.slice(0, 50)}...</p>
          <p>likes: {pObj.reactions}</p>
          <p>{pObj.tags.join(', ')}</p>
          <a className='btn' href="/posts/5">Read More...</a>
        </li>)
        }
      </ul>
      </div>
  )
}
