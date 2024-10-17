import React, { useState } from 'react';
import './PostBlogPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { addBlogPost } from '../../store/blogReducer'; // Action to add blog post
import placeholderImage from '../../assets/placeholder.png'; // Placeholder image

const PostBlogPage = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.auth.user); // Get logged-in user info from Redux

  const [formData, setFormData] = useState({
    title: '',
    image: null, // Will store the image file
    authorName: loggedInUser?.fullname || '', // Set author name from logged-in user
    authorProfilePicture: loggedInUser?.profilePicture || '',
    shortDescription: '',
    longDescription: '',
    datePosted: '', // Date will be set automatically
    readTime: '',
    category: '',
    isTrending: false, // Default false
  });

  const categories = ['Sports Cars', 'Electric Cars', 'Luxury Cars', 'SUV']; // Example categories

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: URL.createObjectURL(file), // Store image URL
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlogPost = {
      ...formData,
      authorName: loggedInUser.fullname,
      authorProfilePicture: loggedInUser.profilePicture,
      datePosted: new Date().toISOString(), // Auto set current date
    };
    dispatch(addBlogPost(newBlogPost)); // Dispatch the blog post to Redux

    // Reset form after submission
    setFormData({
      title: '',
      image: null,
      authorName: loggedInUser?.fullname || '',
      authorProfilePicture: loggedInUser?.profilePicture || '',
      shortDescription: '',
      longDescription: '',
      datePosted: '',
      readTime: '',
      category: '',
      isTrending: false,
    });
  };

  return (
    <div className='post-blog-page'>
      <h2>Create a New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Title</label>
          <input
            type='text'
            name='title'
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className='form-group'>
          <label>Short Description</label>
          <textarea
            name='shortDescription'
            value={formData.shortDescription}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className='form-group'>
          <label>Long Description</label>
          <textarea
            name='longDescription'
            value={formData.longDescription}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className='form-group'>
          <label>Read Time (in minutes)</label>
          <input
            type='text'
            name='readTime'
            value={formData.readTime}
            onChange={handleChange}
            required
          />
        </div>

        <div className='form-group'>
          <label>Category</label>
          <select
            name='category'
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value='' disabled>Select a category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className='form-group'>
          <label>Upload Image</label>
          <div className='image-upload'>
            <img
              src={formData.image || placeholderImage}
              alt='Blog'
              className='image-placeholder'
            />
            <input
              type='file'
              accept='image/*'
              onChange={handleImageUpload}
              style={{ display: 'none' }}
              id='imageUpload'
            />
            <label htmlFor='imageUpload' className='image-upload-label'>
              Choose Image
            </label>
          </div>
        </div>

        <div className='form-group'>
          <label>
            <input
              type='checkbox'
              name='isTrending'
              checked={formData.isTrending}
              onChange={handleChange}
            />
            Trending
          </label>
        </div>

        <button type='submit'>Post Blog</button>
      </form>
    </div>
  );
};

export default PostBlogPage;
