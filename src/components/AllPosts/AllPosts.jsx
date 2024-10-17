import React, { useEffect } from 'react';
import './AllPosts.css';
import PostCard from './PostCard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlogs } from '../../store/actions/blogActions'; // Import the fetchBlogs action

const AllPosts = () => {
  const dispatch = useDispatch();
  
  // Fetch blog posts from the store, provide a default empty array if undefined
  const blogPosts = useSelector((state) => state.blogs.blogs || []); // Ensure 'blogs' is an array

  // Fetch blogs on component mount
  useEffect(() => {
    dispatch(fetchBlogs()); // Fetch all blogs
    window.scrollTo(0, 0); // Scroll to the top
  }, [dispatch]);

  return (
    <div className='all-posts'>
      <h2>All posts</h2>
      <div>
        {Array.isArray(blogPosts) && blogPosts.length > 0 ? (
          blogPosts.map((post) => (
            <PostCard key={post.id} post={post} /> // Pass each post to PostCard
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </div>
  );
};

export default AllPosts;
