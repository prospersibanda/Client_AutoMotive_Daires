import React from 'react';
import './HeroSection.css';
import { FaPaperPlane } from 'react-icons/fa';


const HeroSection = () => {
  return (
    <div className='hero-section'>
        <h1>Every Ride Tells a Story <br />Every Mile Has a Story</h1>
        <p>Your pit stop for everything cars. We cover everything from 
            the hottest releases and tech innovations to real-life driving 
            experiences. Whether you're a gearhead or just love a smooth 
            ride, our blog is packed with content that fuels your automotive 
            obsession.
        </p>
        <button>Subscribe <FaPaperPlane/></button>
    </div>
  )
}

export default HeroSection