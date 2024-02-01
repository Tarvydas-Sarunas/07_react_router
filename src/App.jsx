import { useState } from 'react';
import './styles/App.css';
import AboutPages from './pages/AboutPages';

export default function App() {

  const [currentPage, setCurrentPage] = useState(1)

  console.log('App susikure');
  return (
    <div className='App container'>
      <h1>Hello, world!</h1>
      <nav className='flex'>
        <a onClick={() => {setCurrentPage(1)}} href="#">Home</a>
        <a onClick={() => {setCurrentPage(2)}} href="#">About</a>
        <a onClick={() => {setCurrentPage(3)}} href="#">Contact</a>
      </nav>
      <hr />


      {currentPage === 1 && <h2>Home</h2>}
      {currentPage === 2 && <AboutPages />}
      {currentPage === 3 && <h2>Contact us</h2>}
    </div>
  );
}
