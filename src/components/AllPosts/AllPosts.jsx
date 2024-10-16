import React, {useEffect} from 'react';
import './AllPosts.css';
import PostCard from './PostCard';
import { useSelector } from 'react-redux';

const AllPosts = () => {
  const blogPosts = useSelector((state) => state.blogs.blogPosts); // Get blog posts from Redux store
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls the window to the top
  }, []);

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
