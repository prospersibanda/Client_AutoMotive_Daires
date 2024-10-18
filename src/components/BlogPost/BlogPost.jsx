import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { likeBlog, shareBlog, toggleBookmark, addComment, fetchBlogs } from '../../store/actions/blogActions';
import './BlogPost.css';
import { FaBookmark, FaHeart, FaRegBookmark, FaRegComment, FaRegHeart, FaShareAlt } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const dispatch = useDispatch();

  const [commentText, setCommentText] = useState('');
  const [showAllComments, setShowAllComments] = useState(false);

  // Fetch blogs from the store
  const blogs = useSelector((state) => state.blogs.blogs);
  const loadingBlogs = useSelector((state) => state.blogs.loading); // Get loading state from Redux
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Get isAuthenticated from Redux
  const loggedInUser = useSelector((state) => state.auth.user); // Get the logged-in user details

  // Find the specific blog post based on the ID
  const blogPost = blogs.find((post) => post.id === parseInt(id));

  // If the blog post isn't in the state, fetch all blogs
  useEffect(() => {
    if (!blogs.length) {
      dispatch(fetchBlogs()); // Fetch all blogs if no blogs are present in the state
    }
  }, [dispatch, blogs.length]);

  // Scroll to the top when the component is loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLike = () => {
    if (blogPost) {
      dispatch(likeBlog(blogPost.id));
    }
  };

  const handleShare = () => {
    if (blogPost) {
      dispatch(shareBlog(blogPost.id));
    }
  };

  const handleBookmark = () => {
    if (blogPost) {
      dispatch(toggleBookmark(blogPost.id));
    }
  };

  const handleAddComment = () => {
    if (commentText.trim()) {
      dispatch(addComment(blogPost.id, commentText));
      setCommentText('');
    }
  };

  // Display loading message if blogs are still being fetched
  if (loadingBlogs) {
    return <p>Loading blog post...</p>;
  }

  // Check if the blog post is found, otherwise show "Not Found"
  if (!blogPost) {
    return <p>Blog post not found!</p>;
  }

  const visibleComments = showAllComments ? blogPost.comments : blogPost.comments.slice(0, 2);

  return (
    <div className='blog-post'>
      <img className="blog-image" src={blogPost.image} alt={blogPost.title} />

      <div className='post-engagement'>
        {blogPost.likes > 0 ? (
          <FaHeart onClick={handleLike} />
        ) : (
          <FaRegHeart onClick={handleLike} />
        )}
        <span>{blogPost.likes}</span>

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
        <img
          src={blogPost.author?.profilePicture || '/default-profile.jpg'}
          alt={typeof blogPost.author?.name === 'string' ? blogPost.author.name : 'Unknown Author'}
        />
        <h4>{typeof blogPost.author?.name === 'string' ? blogPost.author.name : 'Unknown Author'}</h4>
        <p>{new Date(blogPost.datePosted).toLocaleDateString()} - {blogPost.readTime} min read</p>
      </div>

      <div className='read-section'>
        <h2>{blogPost.description.split('.')[0]}</h2>
        <p>{blogPost.content}</p>
      </div>

      <div className='comments'>
        <h2>Comments</h2>

        {isAuthenticated && (
          <div className='write-comment'>
            <div className='comment-author'>
              <img
                src={loggedInUser?.profilePic || '/default-profile.jpg'}
                alt={loggedInUser?.fullname || 'Anonymous'}
              />
              <h4>{loggedInUser?.fullname || 'Anonymous'}</h4>
            </div>
            <div>
              <input
                type="text"
                placeholder='Write a comment...'
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
              <button onClick={handleAddComment}>Post</button>
            </div>
          </div>
        )}

        {visibleComments.map((comment) => (
          <div className='comment' key={comment.id}>
            <div className="comment-author">
              <img
                src={comment.authorProfilePic || '/default-profile.jpg'}
                alt={typeof comment.authorName === 'string' ? comment.authorName : 'Unknown Author'}
              />
              <h4>{typeof comment.authorName === 'string' ? comment.authorName : 'Unknown Author'}</h4>
            </div>
            <div className='comment-text'>
              <p>{comment.text}</p>
            </div>
          </div>
        ))}

        {blogPost.comments.length > 2 && (
          <p className='see-all' onClick={() => setShowAllComments(!showAllComments)}>
            {showAllComments ? 'Hide comments' : 'See all'}
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogPost;
