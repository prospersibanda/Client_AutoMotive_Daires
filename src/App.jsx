import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogsPage from './pages/BlogsPage';
import BlogPostPage from './pages/BlogPostPage';
import TrendingPage from './pages/TrendingPage';
import PostingPage from './pages/PostingPage';
import SignupLoginPage from './pages/SignupLoginPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<SignupLoginPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/blogs' element={<BlogsPage />} />
          <Route path='/trending' element={<TrendingPage />} />
          <Route path='/posting' element={<PostingPage />} />
          <Route path='/category/:id' element={<BlogsPage />} />
          <Route path='/post/:id' element={<BlogPostPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
