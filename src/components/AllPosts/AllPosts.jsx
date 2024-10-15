import React from 'react';
import './AllPosts.css';
import PostCard from './PostCard';
import { useSelector } from 'react-redux';

const AllPosts = () => {
  const blogPosts = useSelector((state) => state.blogs.blogPosts); // Get blog posts from Redux store

  return (
    <div className='all-posts'>
      <h2>All posts</h2>
      <div>
        {blogPosts.map((post) => (
          <PostCard key={post.id} post={post} /> // Pass each post to PostCard
        ))}
      </div>
    </div>
  );
}

export default AllPosts;
