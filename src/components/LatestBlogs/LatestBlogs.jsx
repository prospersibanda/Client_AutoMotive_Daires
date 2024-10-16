import React from 'react';
import './LatestBlogs.css';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux store
import { useNavigate } from 'react-router-dom'; // Import useNavigate to handle blog navigation

const LatestBlogs = () => {
  const navigate = useNavigate();

  const blogs = useSelector((state) => state.blogs.blogPosts); // Fetch all blog posts from Redux store

  // Find the latest blog post by sorting the blogs by date
  const latestBlog = blogs.length > 0 
    ? blogs.reduce((latest, current) => new Date(current.datePosted) > new Date(latest.datePosted) ? current : latest, blogs[0])
    : null;

  // Filter trending blogs
  const trendingBlogs = blogs.filter((blog) => blog.isTrending);

  // Function to handle blog navigation
  const handleReadMore = (id) => {
    navigate(`/post/${id}`); // Navigate to the blog post page by its ID
  };

  return (
    <div className='latest-section'>
      {/* Display latest blog */}
      {latestBlog && (
        <div className='latest-blog'>
          <h1>Latest</h1>
          <img src={latestBlog.image} alt={latestBlog.title} />
          <h4>
            By <span>{latestBlog.author.name}</span> || {new Date(latestBlog.datePosted).toLocaleDateString()}
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
          <span>See all</span>
        </div>
        
        {trendingBlogs.map((blog, index) => (
          <div
            className={index === 1 ? 'blog-highlight' : 'blog'} // Highlight second trending blog
            key={blog.id}
            onClick={() => handleReadMore(blog.id)} // Navigate to blog post on click
          >
            <h4>
              By <span>{blog.author.name}</span> | {new Date(blog.datePosted).toLocaleDateString()}
            </h4>
            <h2>{blog.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
