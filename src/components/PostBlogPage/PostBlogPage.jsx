import React, { useState, useRef } from 'react';
import axios from 'axios';
import './PostBlogPage.css';
import placeholderImage from '../../assets/placeholder.png'; // Placeholder image

const PostBlogPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    category: ''
  });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(placeholderImage); // Initial preview as placeholder
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const fileInputRef = useRef(null); // Reference to the hidden file input

  // Handle input change for text fields
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle image file selection and show preview
  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);

    if (selectedFile) {
      const filePreviewURL = URL.createObjectURL(selectedFile);
      setImagePreview(filePreviewURL); // Update preview
    }
  };

  // Trigger file input click when image is clicked
  const handleImageClick = () => {
    fileInputRef.current.click(); // Simulate file input click
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.content || !image) {
      setErrorMessage('Content and image are required');
      return;
    }

    const token = localStorage.getItem('token');
    
    if (!token) {
      setErrorMessage('You are not authenticated.');
      return;
    }

    const blogData = new FormData();
    blogData.append('title', formData.title);
    blogData.append('description', formData.description);
    blogData.append('content', formData.content);
    blogData.append('category', formData.category);
    blogData.append('blogImage', image);

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/blogs/create', blogData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      });

      setSuccessMessage('Blog has been uploaded successfully.');
      setErrorMessage('');

      setFormData({
        title: '',
        description: '',
        content: '',
        category: ''
      });
      setImage(null);
      setImagePreview(placeholderImage); // Reset to placeholder after submission
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Error creating blog');
    }
  };

  return (
    <div className="create-blog-container">
      <h2>Create New Blog Post</h2>
      {errorMessage && <p className="error">{errorMessage}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">

        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Content:</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Category:</label>
          <select name="category" value={formData.category} onChange={handleInputChange} required>
            <option value="">Select a category</option>
            <option value="Electric Cars">Electric Cars</option>
            <option value="Sports Cars">Sports Cars</option>
            <option value="SUV">SUVs</option>
            <option value="Car Maintenance">Car Maintenance</option>
            <option value="Autonomous Vehicles">Autonomous Vehicles</option>
            <option value="Family Cars">Family Cars</option>
            <option value="Classic Cars">Classic Cars</option>
            <option value="Hybrid Cars">Hybrid Cars</option>
            <option value="Luxury Cars">Luxury Cars</option>
          </select>
        </div>

        {/* Hidden file input and clickable image for upload */}
        <div className="form-group image-upload-section">
          <label>Image:</label>
          <input
            type="file"
            name="blogImage"
            accept="image/*"
            onChange={handleImageChange}
            ref={fileInputRef} // Assign ref to the file input
            style={{ display: 'none' }} // Hide the file input
          />
          <div className="image-preview" onClick={handleImageClick}>
            <img src={imagePreview} alt="Preview" />
          </div>
        </div>

        <button type="submit">Submit Blog Post</button>
      </form>
    </div>
  );
};

export default PostBlogPage;
