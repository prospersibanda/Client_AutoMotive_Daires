import axios from 'axios';
import api from './api'
// Fetch all blogs
export const fetchBlogs = () => async (dispatch) => {
  try {
    const { data } = await api.get('/api/blogs/all'); // Ensure this URL is correct
    dispatch({ type: 'FETCH_BLOGS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_BLOGS_FAIL', payload: error.message });
  }
};


// Like a blog
export const likeBlog = (blogId) => async (dispatch) => {
  try {
    const { data } = await api.post(`/api/blogs/${blogId}/like`);
    dispatch({ type: 'LIKE_BLOG_SUCCESS', payload: { blogId, likes: data.likes } });
  } catch (error) {
    dispatch({ type: 'LIKE_BLOG_FAIL', payload: error.message });
  }
};

// Share a blog
export const shareBlog = (blogId) => async (dispatch) => {
  try {
    const { data } = await api.post(`/api/blogs/${blogId}/share`);
    dispatch({ type: 'SHARE_BLOG_SUCCESS', payload: { blogId, shares: data.shares } });
  } catch (error) {
    dispatch({ type: 'SHARE_BLOG_FAIL', payload: error.message });
  }
};

// Toggle bookmark
export const toggleBookmark = (blogId) => async (dispatch) => {
  try {
    const { data } = await api.post(`/api/blogs/${blogId}/bookmark`);
    dispatch({ type: 'TOGGLE_BOOKMARK_SUCCESS', payload: { blogId, isBookmarked: data.isBookmarked } });
  } catch (error) {
    dispatch({ type: 'TOGGLE_BOOKMARK_FAIL', payload: error.message });
  }
};

// Fetch trending blogs
export const fetchTrendingBlogs = () => async (dispatch) => {
  try {
    const { data } = await api.get('/api/blogs/trending');
    dispatch({ type: 'FETCH_TRENDING_BLOGS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_TRENDING_BLOGS_FAIL', payload: error.message });
  }
};

// Create a new blog post
export const createBlog = (blogData) => async (dispatch) => {
  try {
    const { data } = await api.post('/api/blogs/create', blogData);
    dispatch({ type: 'CREATE_BLOG_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'CREATE_BLOG_FAIL', payload: error.message });
  }
};
