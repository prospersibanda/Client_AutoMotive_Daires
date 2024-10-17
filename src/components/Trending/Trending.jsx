import React from 'react';
import './Trending.css';
import TrendingCard from './TrendingCard';
import { useSelector } from 'react-redux';

const Trending = () => {
  // Fetch all blog posts from the Redux store
  const blogs = useSelector((state) => state.blogs.blogs);

  // Filter trending posts
  const trendingBlogs = blogs.filter((blog) => blog.isTrending);

  return (
    <div className='trending-section'>
      <h2>Trending Posts</h2>
      <div className='trending-cards'>
        {trendingBlogs.length > 0 ? (
          trendingBlogs.map((post) => (
            <TrendingCard key={post.id} post={post} /> // Pass each trending post to TrendingCard component
          ))
        ) : (
          <p>No trending posts available</p>
        )}
      </div>
    </div>
  );
};

export default Trending;
