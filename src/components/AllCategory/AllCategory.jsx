import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../store/reducers/categoryReducer';
import './AllCategory.css';
import CategoryCard from './CategoryCard';

const AllCategory = () => {
  const dispatch = useDispatch();
  const { categories = [], loading, error } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchCategories()); // Fetch categories on mount
  }, [dispatch]);

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error loading categories: {error}</p>;

  return (
    <div className='categories'>
      <h2>All Categories</h2>
      <div className='cards'>
        {Array.isArray(categories) && categories.length > 0 ? (
          categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))
        ) : (
          <p>No categories available</p>
        )}
      </div>
    </div>
  );
};

export default AllCategory;
