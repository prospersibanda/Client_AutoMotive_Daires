import React from 'react';
import './AllCategory.css';
import Card from './Card';

const AllCategory = () => {
  return (
    <div className='categories'>
        <h2>All Categories</h2>
        <div className='cards'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default AllCategory