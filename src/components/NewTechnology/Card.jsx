import React from 'react';
import './PostsHome.css';

const Card = ({ post }) => {
  return (
    <div className='newTech-card'>
      <img className='main-img' src={post.image} alt={post.title} />
      <h3>{post.title}</h3>
      <div className='author'>
        <img src={post.author.profilePicture} alt={post.author.name} />
        <div className='author-head'>
          <h4>{post.author.name}</h4>
          <p>{new Date(post.datePosted).toLocaleDateString()} - {post.readTime}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
