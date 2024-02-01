import React from 'react'
import { Link, NavLink} from 'react-router-dom'

export default function Header() {
  return (
    <header className='container flex between item-center'>
      <a className='logo' href="#" >
        <h2 className='item-center'>Logo</h2>
      </a>
      <nav className='flex item-center'>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
        <NavLink end to={"/posts"}>Our Posts</NavLink>
        <NavLink to={"/add-post"}>Create Post</NavLink>
      </nav>
  
    </header>
  )
}
