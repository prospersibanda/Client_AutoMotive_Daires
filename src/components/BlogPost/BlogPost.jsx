import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { likeBlog, shareBlog, toggleBookmark } from '../../store/actions/blogActions'; // Use actions from Redux store
import './BlogPost.css';
import { FaBookmark, FaHeart, FaRegBookmark, FaRegComment, FaRegHeart, FaShareAlt } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams(); // Get the blog post ID from the URL
  const dispatch = useDispatch();

  // Get the specific blog post from the Redux store by its ID
  const blogPost = useSelector((state) => state.blogs.blogs.find((post) => post.id === parseInt(id)));

  // Scroll to top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls the window to the top
  }, []);

  // Handle like
  const handleLike = () => {
    dispatch(likeBlog(blogPost.id)); // Update the like count in the Redux store
  };

  // Handle share
  const handleShare = () => {
    dispatch(shareBlog(blogPost.id)); // Update the share count in the store
  };

  // Handle bookmark
  const handleBookmark = () => {
    dispatch(toggleBookmark(blogPost.id)); // Toggle the bookmark status in the Redux store
  };

  if (!blogPost) {
    return <p>Blog post not found!</p>;
  }

  return (
    <div className='blog-post'>
      <img src={blogPost.image} alt={blogPost.title} />
      <div className='post-engagement'>
        {/* Like section */}
        {blogPost.likes > 0 ? (
          <FaHeart onClick={handleLike} />
        ) : (
          <FaRegHeart onClick={handleLike} />
        )}
        <span>{blogPost.likes}</span>

        {/* Comments section */}
        <FaRegComment />
        <span>{blogPost.comments.length}</span>

        {/* Share section */}
        <FaShareAlt onClick={handleShare} />
        <span>{blogPost.shares}</span>

        {/* Bookmark section */}
        {blogPost.isBookmarked ? (
          <FaBookmark onClick={handleBookmark} />
        ) : (
          <FaRegBookmark onClick={handleBookmark} />
        )}
      </div>

      <h1>{blogPost.title}</h1>

      {/* Author info section */}
      <div className='author-info'>
        <img src={blogPost.author.profilePicture} alt={blogPost.author.name} />
        <h4>{blogPost.author.name}</h4>
        <p>{new Date(blogPost.datePosted).toLocaleDateString()} - {blogPost.readTime} min read</p>
      </div>

      {/* Blog content */}
      <div className='read-section'>
        <div>
          <h2>{blogPost.longDescription.split('.')[0]}</h2>
          <p>{blogPost.longDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
