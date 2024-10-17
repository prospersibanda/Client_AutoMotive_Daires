import React from 'react';
import './LatestBlogs.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LatestBlogs = () => {
  const navigate = useNavigate();

  const blogs = useSelector((state) => state.blogs.blogs); // Fetch all blog posts from Redux store

  // Find the latest blog post by sorting the blogs by date
  const latestBlog = blogs.length > 0 
    ? blogs.reduce((latest, current) => new Date(current.datePosted) > new Date(latest.datePosted) ? current : latest, blogs[0])
    : null;

  // Filter trending blogs based on your isTrending criteria
  const trendingBlogs = blogs.filter((blog) => blog.isTrending); // No restriction on number of blogs

  // Function to handle blog navigation
  const handleReadMore = (id) => {
    navigate(`/post/${id}`); // Navigate to the blog post page by its ID
  };

  return (
    <div className='latest-section'>
      {/* Display latest blog */}
      {latestBlog && latestBlog.author && (
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
      )}

      {/* Display trending blogs */}
      <div className='trending-blogs'>
        <div className='trending-heading'>
          <h1>Trending Blogs</h1>
          <span onClick={() => navigate('/trending')}>See all</span> {/* Add navigation to a dedicated page for all trending blogs */}
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
