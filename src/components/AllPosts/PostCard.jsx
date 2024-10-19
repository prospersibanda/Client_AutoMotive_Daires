import React, { useEffect, useState } from 'react';
import './AllPosts.css';
import { useNavigate } from 'react-router-dom';
import { FaBookmark, FaHeart, FaRegBookmark, FaRegComment, FaRegHeart, FaShareAlt } from 'react-icons/fa';

const PostCard = ({ post }) => {
  const navigate = useNavigate();

  // State for managing likes locally
  const [likes, setLikes] = useState(0);
  const [userHasLiked, setUserHasLiked] = useState(false);

  // Load likes and userHasLiked from localStorage when component mounts
  useEffect(() => {
    if (post) {
      const storedLikes = JSON.parse(localStorage.getItem('blogLikes')) || {};
      const postData = storedLikes[post.id] || { likes: 0, userHasLiked: false };
      setLikes(postData.likes); // Set likes from localStorage or default to 0
      setUserHasLiked(postData.userHasLiked); // Set userHasLiked from localStorage or default to false
    }
  }, [post]);

  // Update likes and userHasLiked in localStorage
  const updateLocalStorage = (updatedLikes, updatedUserHasLiked) => {
    const storedLikes = JSON.parse(localStorage.getItem('blogLikes')) || {};
    storedLikes[post.id] = { likes: updatedLikes, userHasLiked: updatedUserHasLiked };
    localStorage.setItem('blogLikes', JSON.stringify(storedLikes));
  };

  // Handle like/unlike functionality locally
  const handleLike = () => {
    if (!userHasLiked) {
      const updatedLikes = likes + 1;
      setLikes(updatedLikes); // Increment likes
      setUserHasLiked(true); // Set the user has liked
      updateLocalStorage(updatedLikes, true); // Update localStorage
    } else {
      const updatedLikes = likes - 1;
      setLikes(updatedLikes); // Decrement likes
      setUserHasLiked(false); // Set the user has unliked
      updateLocalStorage(updatedLikes, false); // Update localStorage
    }
  };

  const handleReadFullArticle = () => {
    navigate(`/post/${post.id}`);
  };

  // Log the entire post object to understand its structure
  console.log('Post Object:', post);

  // Safely accessing post.author fields
  const authorName = post.author?.name || post.author?.fullname || 'Unknown Author'; 
  const authorProfilePic = post.author?.profilePicture || '/default-profile-pic.jpg'; 

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
          {/* Toggle between liked and unliked states based on local userHasLiked */}
          {userHasLiked ? (
            <FaHeart onClick={handleLike} style={{ cursor: 'pointer' }} />
          ) : (
            <FaRegHeart onClick={handleLike} style={{ cursor: 'pointer' }} />
          )}
          <span>{likes}</span> {/* Display the updated likes count */}

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
