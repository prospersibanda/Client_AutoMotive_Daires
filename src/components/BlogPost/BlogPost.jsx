import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateLike, updateShare, toggleBookmark } from '../../store/blogReducer';
import './BlogPost.css';
import { FaBookmark, FaHeart, FaRegBookmark, FaRegComment, FaRegHeart, FaShareAlt } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams(); // Get the blog post ID from the URL
  const dispatch = useDispatch();

  const blogPost = useSelector((state) => state.blogs.blogPosts.find(post => post.id === parseInt(id))); // Find the specific post by ID

  // Scroll to top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls the window to the top
  }, []);

  // Handle like
  const handleLike = () => {
    const newLikeCount = blogPost.likeCount > 0 ? blogPost.likeCount - 1 : blogPost.likeCount + 1;
    dispatch(updateLike(blogPost.id, newLikeCount)); // Update the like count in the Redux store
  };

  // Handle share
  const handleShare = () => {
    const newShareCount = blogPost.shares + 1;
    dispatch(updateShare(blogPost.id, newShareCount)); // Update the share count in the store
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
        {blogPost.likeCount > 0 ? (
          <FaHeart onClick={handleLike} />
        ) : (
          <FaRegHeart onClick={handleLike} />
        )}
        <span>{blogPost.likeCount}</span>

        <FaRegComment />
        <span>{blogPost.comments.length}</span>

        <FaShareAlt onClick={handleShare} />
        <span>{blogPost.shares}</span>

        {blogPost.isBookmarked ? (
          <FaBookmark onClick={handleBookmark} />
        ) : (
          <FaRegBookmark onClick={handleBookmark} />
        )}
      </div>

      <h1>{blogPost.title}</h1>

      <div className='author-info'>
        <img src={blogPost.author.profilePicture} alt={blogPost.author.name} />
        <h4>{blogPost.author.name}</h4>
        <p>{new Date(blogPost.datePosted).toLocaleDateString()} - {blogPost.readTime}</p>
      </div>

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
