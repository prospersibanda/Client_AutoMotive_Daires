import React from 'react';
import './LatestBlogs.css'
import latest_img from '../../assets/latest_blog.jpg';

const LatestBlogs = () => {
  return (
    <div className='latest-section'>
        <div className='latest-blog'>
            <h1>Latest</h1>
            <img src={latest_img} alt="Latest Blog" />
            <h4>By <span>Prosper Sibanda</span> || October 14, 2024</h4>
            <h2> The Legendary Camaro Behind Bumblebee</h2>
            <p>From the silver screen to the open road, the Chevrolet 
                Camaro has been more than just a car—it’s a pop culture 
                icon. Known as Bumblebee in the Transformers franchise, 
                this muscle car isn’t just about speed and power; it’s 
                about personality. With its sleek design, roaring engine, 
                and unmistakable presence, the Camaro brings a blend of 
                classic muscle and futuristic tech. Dive into the story 
                of how this legendary car became a fan favorite and why 
                it continues to captivate drivers and movie lovers alike.
            </p>
            <button>Read More</button>
        </div>

        <div className='trending-blogs'>
            <div className='trending-heading'>
                <h1>Trending Blogs</h1>
                <span>See all</span>
            </div>
            <div className='blog'>
                <h4>By <span>Prosper Sibanda </span>| Oct 10, 2024</h4>
                <h2>The Legendary Camaro Behind Bumbleebee</h2>
            </div>
            <div className='blog-highlight'>
                <h4>By Prosper Sibanda | Oct 10, 2024</h4>
                <h2>The Legendary Camaro Behind Bumbleebee</h2>
            </div>
            <div className='blog'>
                <h4>By <span>Prosper Sibanda </span>| Oct 10, 2024</h4>
                <h2>The Legendary Camaro Behind Bumbleebee</h2>
            </div>
            <div className='blog'>
                <h4>By <span>Prosper Sibanda </span>| Oct 10, 2024</h4>
                <h2>The Legendary Camaro Behind Bumbleebee</h2>
            </div>
            <div className='blog'>
                <h4>By <span>Prosper Sibanda </span>| Oct 10, 2024</h4>
                <h2>The Legendary Camaro Behind Bumbleebee</h2>
            </div>
        </div>
    </div>
  )
}

export default LatestBlogs