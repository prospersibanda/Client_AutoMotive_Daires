import axios from 'axios';

// Fetch all blogs
export const fetchBlogs = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/blogs/all');
    dispatch({ type: 'FETCH_BLOGS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_BLOGS_FAIL', payload: error.message });
  }
};

// Like a blog
export const likeBlog = (blogId) => async (dispatch) => {
  try {
    const { data } = await axios.post(`/api/blogs/${blogId}/like`);
    dispatch({ type: 'LIKE_BLOG_SUCCESS', payload: { blogId, likes: data.likes } });
  } catch (error) {
    dispatch({ type: 'LIKE_BLOG_FAIL', payload: error.message });
  }
};

// Fetch trending blogs
export const fetchTrendingBlogs = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/blogs/trending');
    dispatch({ type: 'FETCH_TRENDING_BLOGS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_TRENDING_BLOGS_FAIL', payload: error.message });
  }
};

// Create a new blog post
export const createBlog = (blogData) => async (dispatch) => {
  try {
    const { data } = await axios.post('/api/blogs/create', blogData);
    dispatch({ type: 'CREATE_BLOG_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'CREATE_BLOG_FAIL', payload: error.message });
  }
};
