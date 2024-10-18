import React from 'react';
import './AllPosts.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { likeBlog } from '../../store/actions/blogActions'; // Import action for liking a blog
import { FaBookmark, FaHeart, FaRegBookmark, FaRegComment, FaRegHeart, FaShareAlt } from 'react-icons/fa';

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Debugging: Log the post data passed into PostCard
  console.log("PostCard received post:", post);

  // Handle like
  const handleLike = () => {
    dispatch(likeBlog(post.id)); // Dispatch likeBlog action to update like count
  };

  // Handle navigation to the BlogPostPage
  const handleReadFullArticle = () => {
    navigate(`/post/${post.id}`); // Navigate to the blog post page with the post ID
  };

  // Debugging: Check the image and author information
  console.log(post.image); // This should print the full URL to the image
  console.log(post.author?.name); // Check if author information is correctly passed

  return (
    <div className='post-card'>
      <img className='post-image' src={post.image} alt={post.title} />
      <div className='post-info'>
        <h3>{post.title}</h3>
        <div className='author-profile'>
          <img src={post.author?.profilePicture || '/default-profile.jpg'} alt={post.author?.name || 'Unknown Author'} />
          <div className='author-info'>
            <h4>{post.author?.name || 'Unknown Author'}</h4>
            <p>{new Date(post.datePosted).toLocaleDateString()} - {post.readTime} min read</p>
          </div>
        </div>
        <p className='post-para'>{post.description}</p>

        <button onClick={handleReadFullArticle}>Read full article</button>

        <div className='post-engagement'>
          {post.likes > 0 ? (
            <FaHeart onClick={handleLike} />
          ) : (
            <FaRegHeart onClick={handleLike} />
          )}
          <span>{post.likes}</span>

          <FaRegComment />
          <span>{post.comments.length}</span>

          <FaShareAlt onClick={handleReadFullArticle} />
          <span>{post.shares}</span>

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
