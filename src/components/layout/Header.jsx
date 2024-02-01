import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='container flex between item-center'>
      <a className='logo' href="#" >
        <h2 className='item-center'>Logo</h2>
      </a>
      <nav className='flex item-center'>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/add-post"}>Add Post</Link>
      </nav>
  
    </header>
  )
}
