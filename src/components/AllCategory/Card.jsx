import React from 'react';
import './AllCategory.css'
import car_reviews from '../../assets/car_reviews.jpg';

const Card = () => {
  return (
    <div className='category-card'>
        <img src={car_reviews} alt="Car Reviews" />
        <h3>Car Reviews</h3>
        <p>A list of blogs on Car Reviews</p>
    </div>
  )
}

export default Card