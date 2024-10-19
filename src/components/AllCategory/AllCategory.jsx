import React from 'react';
import './AllCategory.css';
import CategoryCard from './CategoryCard';

//images
import sport_cars from '../../assets/cate_sport_cars.jpg';
import electric_cars from '../../assets/cate_electric_cars.jpg';
import luxury_cars from '../../assets/cate-luxury-cars.jpg';
import suvs from '../../assets/cate_suvs.jpg';

const AllCategory = () => {
  // Hardcoded categories array with image, title, and description
  const categories = [
    {
      id: 1,
      title: 'Sports Cars',
      description: 'Experience the thrill of speed with the latest sports cars.',
      image: sport_cars, // Replace with actual image path
    },
    {
      id: 2,
      title: 'Electric Cars',
      description: 'The future is electric. Discover the latest in EV technology.',
      image: electric_cars,
    },
    {
      id: 3,
      title: 'Luxury Cars',
      description: 'Travel in style and comfort with luxury vehicles.',
      image: luxury_cars,
    },
    {
      id: 4,
      title: 'SUV',
      description: 'Explore rugged terrains with powerful and spacious SUVs.',
      image: suvs,
    },
  ];

  return (
    <div className='categories'>
      <h2>All Categories</h2>
      <div className='cards'>
        {categories.length > 0 ? (
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
