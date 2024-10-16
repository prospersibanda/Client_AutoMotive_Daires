import React, { useState } from 'react';
import './PostBlogPage.css';
import { useDispatch } from 'react-redux';
import { addBlog } from '../../store/blogReducer'; // Assuming you have an action to add a blog

const PostBlogPage = () => {
  const dispatch = useDispatch();

  // Form state
  const [blog, setBlog] = useState({
    title: '',
    image: '',
    authorName: '',
    authorProfilePicture: '',
    shortDescription: '',
    longDescription: '',
    datePosted: '',
    readTime: '',
    category: '',
    isTrending: false,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({
      ...blog,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBlog(blog)); // Dispatch action to add blog
    // Reset form
    setBlog({
      title: '',
      image: '',
      authorName: '',
      authorProfilePicture: '',
      shortDescription: '',
      longDescription: '',
      datePosted: '',
      readTime: '',
      category: '',
      isTrending: false,
    });
  };

  return (
    <div className='post-blog'>
      <h2>Post a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Blog Title</label>
          <input
            type='text'
            name='title'
            value={blog.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className='form-group'>
          <label>Blog Image URL</label>
          <input
            type='text'
            name='image'
            value={blog.image}
            onChange={handleChange}
            required
          />
        </div>

        <div className='form-group'>
          <label>Author Name</label>
          <input
            type='text'
            name='authorName'
            value={blog.authorName}
            onChange={handleChange}
            required
          />
        </div>

        <div className='form-group'>
          <label>Author Profile Picture URL</label>
          <input
            type='text'
            name='authorProfilePicture'
            value={blog.authorProfilePicture}
            onChange={handleChange}
            required
          />
        </div>

        <div className='form-group'>
          <label>Short Description</label>
          <textarea
            name='shortDescription'
            value={blog.shortDescription}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className='form-group'>
          <label>Long Description</label>
          <textarea
            name='longDescription'
            value={blog.longDescription}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className='form-group'>
          <label>Date Posted</label>
          <input
            type='date'
            name='datePosted'
            value={blog.datePosted}
            onChange={handleChange}
            required
          />
        </div>

        <div className='form-group'>
          <label>Read Time (in minutes)</label>
          <input
            type='text'
            name='readTime'
            value={blog.readTime}
            onChange={handleChange}
            required
          />
        </div>

        <div className='form-group'>
          <label>Category</label>
          <input
            type='text'
            name='category'
            value={blog.category}
            onChange={handleChange}
            required
          />
        </div>

        <div className='form-group'>
          <label>
            <input
              type='checkbox'
              name='isTrending'
              checked={blog.isTrending}
              onChange={() =>
                setBlog({ ...blog, isTrending: !blog.isTrending })
              }
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
