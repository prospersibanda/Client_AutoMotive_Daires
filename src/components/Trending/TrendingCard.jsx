import React from 'react';
import './Trending.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const TrendingCard = ({ post }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle navigation to the blog post page
  const handleReadMore = () => {
    navigate(`/post/${post.id}`); // Navigate to the post using its ID
  };

  return (
    <div className='trending-card'>
      <img className='trending-img' src={post.image} alt={post.title} />
      <h3>{post.title}</h3>
      <div className='author-profile'>
        <img src={post.author.profilePicture} alt={post.author.name} />
        <div className='author-info'>
          <h4>{post.author.name}</h4>
          <p>{new Date(post.datePosted).toLocaleDateString()} - {post.readTime}</p>
        </div>
      </div>
      <p className='trending-description'>{post.shortDescription}</p>
      <button onClick={handleReadMore}>Read full article</button> {/* Call handleReadMore on click */}
    </div>
  );
};

export default TrendingCard;
