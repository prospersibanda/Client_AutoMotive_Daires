import React from 'react';
import './NewTechnology.css'
import Card from './Card';

const NewTechnology = () => {
  return (
    <div className='new-technology'>
        <div className='header'>
            <h2>New Technology</h2>
            <span>See all</span>
        </div>
        <div className='cards'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default NewTechnology