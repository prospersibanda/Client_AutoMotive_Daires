import React from 'react';
import './AllPosts.css'
import { useDispatch, useSelector } from 'react-redux'; // UseSelector to sync with the store
import { useNavigate } from 'react-router-dom';
import { updateLike, updateShare, toggleBookmark } from '../../store/blogReducer';
import { FaBookmark, FaHeart, FaRegBookmark, FaRegComment, FaRegHeart, FaShareAlt } from 'react-icons/fa';

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get the blog post from the store to keep sync
  const blogPost = useSelector((state) => state.blogs.blogPosts.find((p) => p.id === post.id));

  // Handle like
  const handleLike = () => {
    const newLikeCount = blogPost.likeCount === post.likeCount ? post.likeCount + 1 : post.likeCount;
    dispatch(updateLike(post.id, newLikeCount)); // Update the like count in the Redux store
  };

  // Handle share
  const handleShare = () => {
    const newShareCount = post.shares + 1;
    dispatch(updateShare(post.id, newShareCount)); // Update the share count in the Redux store
  };

  // Handle bookmark
  const handleBookmark = () => {
    dispatch(toggleBookmark(post.id)); // Toggle the bookmark status in the Redux store
  };

  // Handle navigation to the BlogPostPage
  const handleReadFullArticle = () => {
    navigate(`/post/${post.id}`); // Navigate to the blog post page with the post ID
  };

  return (
    <div className='post-card'>
      <img className='post-image' src={post.image} alt={post.title} />
      <div className='post-info'>
        <h3>{post.title}</h3>
        <div className='author-profile'>
          <img src={post.author.profilePicture} alt={post.author.name} />
          <div className='author-info'>
            <h4>{post.author.name}</h4>
            <p>{new Date(post.datePosted).toLocaleDateString()} - {post.readTime}</p>
          </div>
        </div>
        <p className='post-para'>{post.shortDescription}</p>

        {/* Navigate to the full blog post when clicked */}
        <button onClick={handleReadFullArticle}>Read full article</button>

        {/* Engagement section */}
        <div className='post-engagement'>
          {blogPost.likeCount > 0 ? (
            <FaHeart onClick={handleLike} />
          ) : (
            <FaRegHeart onClick={handleLike} />
          )}
          <span>{blogPost.likeCount}</span>

          <FaRegComment />
          <span>{post.comments.length}</span>

          <FaShareAlt onClick={handleShare} />
          <span>{post.shares}</span>

          {blogPost.isBookmarked ? (
            <FaBookmark onClick={handleBookmark} />
          ) : (
            <FaRegBookmark onClick={handleBookmark} />
          )}
        </div>
      </div>
    </div>
  );
}

export default PostCard;
