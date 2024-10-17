import React from 'react';
import './AllCategory.css';

const CategoryCard = ({ category }) => {
  return (
    <div className='category-card'>
      <img src={category.image} alt={category.title} />
      <h3>{category.title}</h3>
      <p>{category.description}</p>
    </div>
  );
};

export default CategoryCard;
