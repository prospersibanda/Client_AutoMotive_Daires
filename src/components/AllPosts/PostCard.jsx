import React from 'react';
import './AllPosts.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { likeBlog } from '../../store/actions/blogActions'; // Import action for liking a blog
import { FaBookmark, FaHeart, FaRegBookmark, FaRegComment, FaRegHeart, FaShareAlt } from 'react-icons/fa';

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get the blog post from the store to keep sync
  const blogPost = useSelector((state) =>
    state.blogs.blogs.find((p) => p.id === post.id)
  );

  // Handle like
  const handleLike = () => {
    dispatch(likeBlog(post.id)); // Dispatch likeBlog action to update like count
  };

  // Handle share (for now, just update the count, could be extended)
  const handleShare = () => {
    // Handle share logic here, dispatch action as needed.
    console.log("Share logic can be implemented here.");
  };

  // Handle bookmark (currently just toggling bookmark status)
  const handleBookmark = () => {
    // Implement bookmark logic here, dispatch action as needed.
    console.log("Bookmark logic can be implemented here.");
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
            <p>{new Date(post.datePosted).toLocaleDateString()} - {post.readTime} min read</p>
          </div>
        </div>
        <p className='post-para'>{post.shortDescription}</p>

        {/* Navigate to the full blog post when clicked */}
        <button onClick={handleReadFullArticle}>Read full article</button>

        {/* Engagement section */}
        <div className='post-engagement'>
          {/* Like section */}
          {blogPost.likes > 0 ? (
            <FaHeart onClick={handleLike} />
          ) : (
            <FaRegHeart onClick={handleLike} />
          )}
          <span>{blogPost.likes}</span>

          {/* Comment section */}
          <FaRegComment />
          <span>{post.comments.length}</span>

          {/* Share section */}
          <FaShareAlt onClick={handleShare} />
          <span>{post.shares}</span>

          {/* Bookmark section */}
          {blogPost.isBookmarked ? (
            <FaBookmark onClick={handleBookmark} />
          ) : (
            <FaRegBookmark onClick={handleBookmark} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
