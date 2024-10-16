import React from 'react';
import './PostsHome.css';
import Card from './Card';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux store
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const PostsHome = () => {
  const navigate = useNavigate();
  const blogs = useSelector((state) => state.blogs.blogPosts); // Fetch all blog posts from Redux store

  // Function to get 4 random blog posts
  const getRandomPosts = (posts, count) => {
    const shuffled = [...posts].sort(() => 0.5 - Math.random()); // Shuffle the posts array
    return shuffled.slice(0, count); // Return the first 'count' number of shuffled posts
  };

  const randomPosts = getRandomPosts(blogs, 4); // Get 4 random posts

  // Handle navigation to see all blogs
  const handleSeeAll = () => {
    navigate('/blogs'); // Navigate to the /blogs page
  };

  return (
    <div className='new-technology'>
      <div className='header'>
        <h2>Posts</h2>
        <span onClick={handleSeeAll}>See all</span> {/* Navigate to /blogs when clicked */}
      </div>
      <div className='cards'>
        {randomPosts.map((post) => (
          <Card key={post.id} post={post} /> // Pass each random post to the Card component
        ))}
      </div>
    </div>
  );
};

export default PostsHome;
