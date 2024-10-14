import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaPaperPlane, FaTwitter } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <h1>AutoMotive Daires</h1>
            <ul>
                <li>Home</li>
                <li>Blog</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
        </div>

        <div className='footer-newsletter'>
            <h2>Subscribe to our news letter to <br /> get latest updates and news</h2>
            <input type="text" placeholder='example@gmail.com'/>
            <button>Subscribe <FaPaperPlane/></button>
        </div>

        <div className='footer-bottom'>
            <p>All rights reserved. Prosper Sibanda</p>
            <ul>
                <FaFacebook/>
                <FaTwitter/>
                <FaInstagram/>
                <FaLinkedin/>
            </ul>
        </div>
    </div>
  )
}

export default Footer