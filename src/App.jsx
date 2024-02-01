
import { Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import './styles/App.scss';
import HomePage from './pages/HomePage';
import AboutPages from './pages/AboutPages';
import ContactPage from './pages/ContactPage';
import AddPost from './pages/AddPost';
import Footer from './components/layout/Footer';
import PostPage from './pages/PostPage';
import SinglePost from './pages/SinglePost';

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
  <Route path='/posts' element={<PostPage />} />
  <Route path='/posts/5' element={<SinglePost />} />
  <Route path='/add-post' element={<AddPost />} />
  <Route
          path='*'
          element={
            <div className='container'>
              <h2>404</h2>
              <p>not found</p>
            </div>
          }
        />
</Routes>

<hr />

<Footer />
    </div>
  );
}
