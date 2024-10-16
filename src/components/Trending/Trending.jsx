import React from 'react';
import './Trending.css';
import TrendingCard from './TrendingCard';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux store

const Trending = () => {
  const blogs = useSelector((state) => state.blogs.blogPosts); // Fetch all blog posts from Redux store

  // Filter trending posts
  const trendingBlogs = blogs.filter((blog) => blog.isTrending);

  return (
    <div className='trending-section'>
      <h2>Trending Posts</h2>
      <div className='trending-cards'>
        {trendingBlogs.map((post) => (
          <TrendingCard key={post.id} post={post} /> // Pass each trending post to TrendingCard component
        ))}
      </div>
    </div>
  );
}

export default Trending;
