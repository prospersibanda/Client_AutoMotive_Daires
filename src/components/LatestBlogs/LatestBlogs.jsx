import React, { useEffect } from 'react';
import './LatestBlogs.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchBlogs } from '../../store/actions/blogActions'; // Assuming you have this action to fetch blogs

const LatestBlogs = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fetch all blog posts from Redux store
  const blogs = useSelector((state) => state.blogs.blogs || []);

  // Fetch blogs when component mounts
  useEffect(() => {
    if (blogs.length === 0) {
      dispatch(fetchBlogs()); // Fetch blogs if they are not already in state
    }
  }, [dispatch, blogs.length]);

  // Debugging: log the fetched blogs
  useEffect(() => {
    console.log("Fetched blogs:", blogs);
  }, [blogs]);

  // Ensure blogs is an array before proceeding
  if (!Array.isArray(blogs)) {
    console.error("blogs is not an array:", blogs);
    return <p>Error: Blogs data is invalid.</p>;
  }

  // Find the latest blog post by sorting the blogs by date
  const latestBlog = blogs.length > 0 
    ? blogs.reduce((latest, current) => new Date(current.datePosted) > new Date(latest.datePosted) ? current : latest, blogs[0])
    : null;

  // Get top 4 trending blogs sorted by likes
  const trendingBlogs = blogs
    .sort((a, b) => b.likes - a.likes) // Sort blogs by number of likes in descending order
    .slice(0, 4); // Select the top 4 blogs

  // Function to handle blog navigation
  const handleReadMore = (id) => {
    navigate(`/post/${id}`); // Navigate to the blog post page by its ID
  };

  return (
    <div className='latest-section'>
      {/* Display latest blog */}
      {latestBlog && latestBlog.author ? (
        <div className='latest-blog'>
          <h1>Latest</h1>
          <img src={latestBlog.image} alt={latestBlog.title} />
          <h4>
            By <span>{latestBlog.author.name || 'Unknown Author'}</span> || {new Date(latestBlog.datePosted).toLocaleDateString()}
          </h4>
          <h2>{latestBlog.title}</h2>
          <p>{latestBlog.shortDescription}</p>
          <button onClick={() => handleReadMore(latestBlog.id)}>Read More</button>
        </div>
      ) : (
        <p>No latest blog available</p>
      )}

      {/* Display trending blogs */}
      <div className='trending-blogs'>
        <div className='trending-heading'>
          <h1>Trending Blogs</h1>
          <span onClick={() => navigate('/trending')}>See all</span> {/* Navigation to a dedicated page for all trending blogs */}
        </div>

        {trendingBlogs.length > 0 ? (
          trendingBlogs.map((blog) => (
            <div
              className='blog'
              key={blog.id}
              onClick={() => handleReadMore(blog.id)}
            >
              <h4>
                By <span>{blog.author?.name || 'Unknown Author'}</span> | {new Date(blog.datePosted).toLocaleDateString()}
              </h4>
              <h2>{blog.title}</h2>
            </div>
          ))
        ) : (
          <p>No trending blogs available</p>
        )}
      </div>
    </div>
  );
};

export default LatestBlogs;
