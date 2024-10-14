import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>AutoMotive Daires</h1>
        <div className='nav-right'>
            <ul className='nav-links'>
                <li className='active'>Home</li>
                <li>Blogs</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Navbar