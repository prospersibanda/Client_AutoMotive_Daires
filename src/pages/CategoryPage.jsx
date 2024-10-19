import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlogs } from '../store/actions/blogActions';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import PostCard from '../components/AllPosts/PostCard'; // Assuming we reuse PostCard for listing posts
import { useParams } from 'react-router-dom';
import './CategoryPage.css'; // Add styles if needed
import AllCategory from '../components/AllCategory/AllCategory';

const CategoryPage = () => {
  const { categoryName } = useParams(); // Retrieve category name from the URL
  const dispatch = useDispatch();

  const blogs = useSelector((state) => state.blogs.blogs); // Fetch all blogs from Redux store
  const loading = useSelector((state) => state.blogs.loading); // Fetch loading state

  // Fetch blogs if not already fetched
  useEffect(() => {
    if (blogs.length === 0) {
      dispatch(fetchBlogs());
    }
  }, [dispatch, blogs.length]);

  // Filter blogs by the selected category
  const filteredBlogs = blogs.filter((blog) => blog.category.toLowerCase() === categoryName.toLowerCase());

  return (
    <div>
      <Navbar />
      <div className="category-page">
        <h1>{categoryName} Blogs</h1>
        {loading ? (
          <p>Loading...</p>
        ) : filteredBlogs.length > 0 ? (
          <div className="category-blogs">
            {filteredBlogs.map((blog) => (
              <PostCard key={blog.id} post={blog} />
            ))}
          </div>
        ) : (
          <p>No blogs found in this category.</p>
        )}
      </div>
      <AllCategory/>
      <Footer />
    </div>
  );
};

export default CategoryPage;
