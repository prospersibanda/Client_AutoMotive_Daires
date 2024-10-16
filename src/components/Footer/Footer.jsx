import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaPaperPlane, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <h1>AutoMotive Diaries</h1>
        <ul>
          <li>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/blogs' className={({ isActive }) => (isActive ? 'active' : '')}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : '')}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : '')}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>

      <div className='footer-newsletter'>
        <h2>Subscribe to our newsletter to <br /> get the latest updates and news</h2>
        <input type="text" placeholder='example@gmail.com' />
        <button>Subscribe <FaPaperPlane /></button>
      </div>

      <div className='footer-bottom'>
        <p>All rights reserved. Prosper Sibanda</p>
        <ul className='social-links'>
          <li><FaFacebook /></li>
          <li><FaTwitter /></li>
          <li><FaInstagram /></li>
          <li><FaLinkedin /></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
