import React from 'react';
import './NewTechnology.css'
import car_systems from '../../assets/car_systems.jpg';
import Author1 from '../../assets/author1.jpg';

const Card = () => {
  return (
    <div className='newTech-card'>
        <img className='main-img' src={car_systems} alt="Infotainment Cars" />
        <h3>A Review Of Cars With Advanced Infotainment Systems</h3>
        <div className='author'>
            <img src={Author1} alt="" />
            <div className='author-head'>
                <h4>Prosper Sibanda</h4>
                <p>Oct 11, 2024 - 3MinRead</p>
            </div>
        </div>
    </div>
  )
}

export default Card