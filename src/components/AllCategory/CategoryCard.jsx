import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AllCategory.css';

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate(`/category/${category.title}`); // Navigate to the category page
  };

  return (
    <div className='category-card' onClick={handleCategoryClick} style={{ cursor: 'pointer' }}>
      <img src={category.image} alt={category.title} />
      <h3>{category.title}</h3>
      <p>{category.description}</p>
    </div>
  );
};

export default CategoryCard;
