import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AllPosts from './Pages/AllPosts';
 import CreatePostPage from './Pages/CreatePostPage'
import MyPosts from './Pages/MyPosts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<MyPosts/>} />
          <Route path='/AllPosts' element={<AllPosts />} />
          <Route path='/CreatePostPage' element={<CreatePostPage />} />
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
