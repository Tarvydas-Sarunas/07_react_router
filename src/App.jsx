
import { Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import './styles/App.scss';
import HomePage from './pages/HomePage';
import AboutPages from './pages/AboutPages';
import ContactPage from './pages/ContactPage';
import AddPost from './pages/AddPost';
import Footer from './components/layout/Footer';

export default function App() {

  console.log('App susikure');
  return (
    <div className='App container'>

      <Header />
<hr />
      
<Routes>
  <Route path='/' element={<HomePage />} />
  <Route path='/about' element={<AboutPages />} />
  <Route path='/contact' element={<ContactPage />} />
  <Route path='/add-post' element={<AddPost />} />
</Routes>

<hr />

<Footer />
    </div>
  );
}
