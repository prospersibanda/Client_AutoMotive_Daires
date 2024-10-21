import React, { useState, useEffect } from 'react';
import './Login.css';
import phone_img from '../../assets/signup.png';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/actions/authActions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, isAuthenticated, loading } = useSelector((state) => state.auth); // Include loading state

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData)); // Dispatch login action
  };

  // Navigate to home page only if authenticated and prevent repeated navigation
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true }); // Use { replace: true } to prevent push history.
    }
  }, [isAuthenticated, navigate]); 

  return (
    <div className='Login'>
      <div className='Login-left'>
        <h2>Social Media shared today, tomorrow or by location</h2>
        <div className='Login-img'>
          <img src={phone_img} alt="Login visual" />
        </div>
      </div>

      <div className='Login-right'>
        <h2>AutoMotive Diaries</h2>
        <div className='head'>
          <h1>Login</h1>
          <p>Every mile tells a Story</p>
        </div>

        {error && <p className='error'>{error}</p>} {/* Display error if any */}
        
        <form onSubmit={handleSubmit}>
          <div className='input-field'>
            <p>Email Address*</p>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className='input-field'>
            <p>Password*</p>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className='login-button' disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p>Don't have an account? <span onClick={() => navigate('/signup')}>Sign up</span></p>
      </div>
    </div>
  );
};

export default Login;
