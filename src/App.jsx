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
import NotFoundPage from './pages/NotFoundPage';

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
            <ProtectedRoute><HomePage /></ProtectedRoute>
                
            }/>
          <Route path='/signup' element={<SignupLoginPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/blogs' element={<ProtectedRoute><BlogsPage /></ProtectedRoute>} />
          <Route path='/trending' element={<ProtectedRoute><TrendingPage /></ProtectedRoute>} />
          <Route path='/posting' element={<ProtectedRoute><PostingPage /></ProtectedRoute> } />
          <Route path="/category/:categoryName" element={<ProtectedRoute><CategoryPage /></ProtectedRoute>} /> 
          <Route path='/post/:id' element={<ProtectedRoute><BlogPostPage /></ProtectedRoute>} />
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
