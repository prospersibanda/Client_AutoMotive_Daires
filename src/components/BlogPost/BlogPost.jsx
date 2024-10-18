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

  // Scroll to the top when the component is loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLike = () => {
    if (blogPost) {
      console.log('Liking blog post:', blogPost.id);
      dispatch(likeBlog(blogPost.id));
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

  const visibleComments = showAllComments ? blogPost.comments : blogPost.comments.slice(0, 2);
  console.log('Visible Comments:', visibleComments);

  return (
    <div className='blog-post'>
      <img className="blog-image" src={blogPost.image} alt={blogPost.title} />

      <div className='post-engagement'>
        {blogPost.likes.length > 0 ? (
          <FaHeart onClick={handleLike} />
        ) : (
          <FaRegHeart onClick={handleLike} />
        )}
        <span>{blogPost.likes.length}</span>  {/* Rendering length instead of object */}

        <FaRegComment />
        <span>{blogPost.comments.length}</span>  {/* Rendering length instead of object */}

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
            <input
              type="text"
              placeholder='Write a comment...'
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button onClick={handleAddComment}>Post</button>
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
                  src={comment.authorProfilePic || '/default-profile.jpg'}
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
