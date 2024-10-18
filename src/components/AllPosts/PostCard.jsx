import React from 'react';
import './AllPosts.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { likeBlog } from '../../store/actions/blogActions'; 
import { FaBookmark, FaHeart, FaRegBookmark, FaRegComment, FaRegHeart, FaShareAlt } from 'react-icons/fa';

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLike = () => {
    dispatch(likeBlog(post.id)); 
  };

  const handleReadFullArticle = () => {
    navigate(`/post/${post.id}`);
  };

  // Log the entire post object to understand its structure
  console.log('Post Object:', post);

  // Safely accessing post.author fields
  const authorName = post.author?.name || post.author?.fullname || 'Unknown Author'; 
  const authorProfilePic = post.author?.profilePicture || '/default-profile-pic.jpg'; 

  // Additional logging for debugging
  console.log('Author Name:', authorName);
  console.log('Profile Picture URL:', authorProfilePic);

  // Ensure post.description is a string
  if (typeof post.description !== 'string') {
    console.error('Post description is not a string:', post.description);
  }

  // Check likes, comments, and shares
  console.log('Likes:', post.likes);
  console.log('Comments:', post.comments);
  console.log('Shares:', post.shares);

  return (
    <div className='post-card'>
      <img className='post-image' src={post.image} alt={post.title} />
      <div className='post-info'>
        <h3>{post.title}</h3>

        <div className='author-profile'>
          <img src={authorProfilePic} alt={authorName} />
          <div className='author-info'>
            <h4>{authorName}</h4>
            <p>{new Date(post.datePosted).toLocaleDateString()} - {post.readTime} min read</p>
          </div>
        </div>

        <p className='post-para'>{post.description}</p>

        <button onClick={handleReadFullArticle}>Read full article</button>

        <div className='post-engagement'>
          {typeof post.likes === 'number' && post.likes > 0 ? (
            <FaHeart onClick={handleLike} />
          ) : (
            <FaRegHeart onClick={handleLike} />
          )}
          <span>{typeof post.likes === 'number' ? post.likes : 0}</span>

          <FaRegComment />
          <span>{Array.isArray(post.comments) ? post.comments.length : 0}</span>

          <FaShareAlt onClick={handleReadFullArticle} />
          <span>{typeof post.shares === 'number' ? post.shares : 0}</span>

          {post.isBookmarked ? (
            <FaBookmark onClick={handleReadFullArticle} />
          ) : (
            <FaRegBookmark onClick={handleReadFullArticle} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;