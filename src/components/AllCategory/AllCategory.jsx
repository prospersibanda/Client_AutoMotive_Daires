import React from 'react';
import './AllCategory.css';
import CategoryCard from './CategoryCard';
import { useSelector } from 'react-redux'; // Import useSelector to access the Redux store

const AllCategory = () => {
  const categories = useSelector((state) => state.categories.categories); // Get categories from Redux store

  return (
    <div className='categories'>
      <h2>All Categories</h2>
      <div className='cards'>
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} /> // Pass category data as props to CategoryCard
        ))}
      </div>
    </div>
  );
}

export default AllCategory;
