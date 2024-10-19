import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { logout } from '../../store/actions/authActions'; // Import the logout action
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize dispatch

  // Handle logout
  const handleLogout = () => {
    // Dispatch the logout action to update Redux state
    dispatch(logout());

    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div className='navbar'>
      <h1>AutoMotive Diaries</h1>
      <div className='nav-right'>
        <ul className='nav-links'>
          <li>
            <NavLink 
              to='/' 
              className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/blogs' 
              className={({ isActive }) => (isActive ? 'active' : '')}>
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/posting' 
              className={({ isActive }) => (isActive ? 'active' : '')}>
              Post
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/profile' 
              className={({ isActive }) => (isActive ? 'active' : '')}>
              Profile
            </NavLink>
          </li>
        </ul>
        <button className='logout-btn' onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
