import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { shareBlog, toggleBookmark, addComment, fetchBlogs } from '../../store/actions/blogActions';
import './BlogPost.css';
import { FaBookmark, FaHeart, FaPaperPlane, FaRegBookmark, FaRegComment, FaRegHeart, FaShareAlt } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import profile_default from '../../assets/profile-default.jpg';

const BlogPost = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const dispatch = useDispatch();

  const [commentText, setCommentText] = useState('');
  const [showAllComments, setShowAllComments] = useState(false);

  // State for managing likes locally
  const [likes, setLikes] = useState(0);
  const [userHasLiked, setUserHasLiked] = useState(false);

  // Fetch blogs from the store
  const blogs = useSelector((state) => state.blogs.blogs);
  const loadingBlogs = useSelector((state) => state.blogs.loading); // Get loading state from Redux
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Get isAuthenticated from Redux

  // Debug logs
  console.log('Blogs:', blogs);
  console.log('isAuthenticated:', isAuthenticated);

  // Find the specific blog post based on the ID
  const blogPost = blogs.find((post) => post.id === parseInt(id));
  console.log('BlogPost:', blogPost);

  // If the blog post isn't in the state, fetch all blogs
  useEffect(() => {
    if (!blogs.length || !blogPost) {
      console.log('Fetching blogs...');
      dispatch(fetchBlogs()); // Fetch all blogs if no blogs are present in the state or the specific blog isn't found
    }
  }, [dispatch, blogs.length, blogPost]);

  // Load likes and userHasLiked from localStorage when component mounts
  useEffect(() => {
    if (blogPost) {
      const storedLikes = JSON.parse(localStorage.getItem('blogLikes')) || {};
      const blogData = storedLikes[blogPost.id] || { likes: 0, userHasLiked: false };
      setLikes(blogData.likes); // Set likes from localStorage or default to 0
      setUserHasLiked(blogData.userHasLiked); // Set userHasLiked from localStorage or default to false
    }
  }, [blogPost]);

  // Scroll to the top when the component is loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Update likes and userHasLiked in localStorage
  const updateLocalStorage = (updatedLikes, updatedUserHasLiked) => {
    const storedLikes = JSON.parse(localStorage.getItem('blogLikes')) || {};
    storedLikes[blogPost.id] = { likes: updatedLikes, userHasLiked: updatedUserHasLiked };
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

  const handleShare = () => {
    if (blogPost) {
      console.log('Sharing blog post:', blogPost.id);
      dispatch(shareBlog(blogPost.id));
    }
  };

  const handleBookmark = () => {
    if (blogPost) {
      console.log('Bookmarking blog post:', blogPost.id);
      dispatch(toggleBookmark(blogPost.id));
    }
  };

  const handleAddComment = () => {
    if (commentText.trim()) {
      console.log('Adding comment to blog post:', blogPost.id, 'Comment:', commentText);
      dispatch(addComment(blogPost.id, commentText));
      setCommentText('');
    }
  };

  // Display loading message if blogs are still being fetched
  if (loadingBlogs) {
    console.log('Loading blogs...');
    return <p>Loading blog post...</p>;
  }

  // Check if the blog post is found, otherwise show "Not Found"
  if (!blogPost) {
    console.log('Blog post not found!');
    return <p>Blog post not found!</p>;
  }

  const visibleComments = showAllComments ? blogPost.comments : blogPost.comments?.slice(0, 2) || [];
  console.log('Visible Comments:', visibleComments);

  return (
    <div className='blog-post'>
      <img className="blog-image" src={blogPost.image} alt={blogPost.title} />

      <div className='post-engagement'>
        {/* Toggle between liked and unliked states based on local userHasLiked */}
        {userHasLiked ? (
          <FaHeart onClick={handleLike} style={{ cursor: 'pointer' }} />
        ) : (
          <FaRegHeart onClick={handleLike} style={{ cursor: 'pointer' }} />
        )}
        <span>{likes}</span> {/* Display the updated likes count */}

        <FaRegComment />
        <span>{blogPost.comments?.length || 0}</span> {/* Render the number of comments */}

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
          src={blogPost.author?.profilePicture || profile_default}
          alt={blogPost.author?.name || 'Unknown Author'}
        />
        <h4>{blogPost.author?.name || 'Unknown Author'}</h4>
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
            <div className="comment-author">
              <img src={profile_default} alt="author" />
            </div>
            <input
              type="text"
              placeholder='Write a comment...'
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button onClick={handleAddComment}><FaPaperPlane/></button>
          </div>
        )}

        {visibleComments.map((comment) => {
          console.log('Rendering comment:', comment);
          
          // Safely use authorName or fallback to avoid passing objects
          const authorName = typeof comment.authorName === 'object' ? comment.authorName.fullname : comment.authorName;
          
          return (
            <div className='comment' key={comment.id}>
              <div className="comment-author">
                <img
                  src={profile_default}
                  alt={authorName || 'Unknown Author'}
                />
                <h4>{authorName || 'Unknown Author'}</h4>
              </div>
              <div className='comment-text'>
                <p>{comment.text}</p>
              </div>
            </div>
          );
        })}

        {blogPost.comments?.length > 2 && (
          <p className='see-all' onClick={() => setShowAllComments(!showAllComments)}>
            {showAllComments ? 'Hide comments' : 'See all'}
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogPost;
