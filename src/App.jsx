import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogsPage from './pages/BlogsPage';
import BlogPostPage from './pages/BlogPostPage';
import TrendingPage from './pages/TrendingPage';
import PostingPage from './pages/PostingPage';
import SignupLoginPage from './pages/SignupLoginPage';
import LoginPage from './pages/LoginPage';
import CategoryPage from './pages/CategoryPage';
import ProtectedRoute from './auth/ProtectedRoute';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadUserFromStorage } from './store/actions/authActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserFromStorage()); // Load user from localStorage when the app initializes
  }, [dispatch]);
  return (
    <div>
      <Router>
        <Routes>
          <Route 
          path='/'
           element={
                <HomePage />
            }/>
          <Route path='/signup' element={<SignupLoginPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/blogs' element={<BlogsPage />} />
          <Route path='/trending' element={<TrendingPage />} />
          <Route path='/posting' element={<PostingPage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} /> 
          <Route path='/post/:id' element={<BlogPostPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
