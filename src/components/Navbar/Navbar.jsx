import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
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
        <button className='logout-btn'>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
