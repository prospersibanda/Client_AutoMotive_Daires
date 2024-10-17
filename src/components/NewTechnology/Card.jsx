import React from 'react';
import './PostsHome.css';

const Card = ({ post }) => {
  return (
    <div className='newTech-card'>
      <img className='main-img' src={post.image} alt={post.title} />
      <h3>{post.title}</h3>
      <div className='author'>
        <img src={post.author?.profilePicture} alt={post.author?.name || 'Unknown Author'} />
        <div className='author-head'>
          <h4>{post.author?.name || 'Unknown Author'}</h4>
          <p>{new Date(post.datePosted).toLocaleDateString()} - {post.readTime} min read</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
