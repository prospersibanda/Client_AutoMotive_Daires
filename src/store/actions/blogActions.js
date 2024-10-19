import api from './api';

// Fetch all blogs
export const fetchBlogs = () => async (dispatch) => {
  try {
    const { data } = await api.get('/api/blogs/all');
    dispatch({ type: 'FETCH_BLOGS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_BLOGS_FAIL', payload: error.message });
  }
};

// Like or unlike a blog
export const likeBlog = (blogId) => async (dispatch, getState) => {
  try {
    const { auth: { token } } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Attach the token
      },
    };

    const { data } = await api.post(`/api/blogs/${blogId}/like`, {}, config);

    dispatch({
      type: 'LIKE_BLOG_SUCCESS',
      payload: { blogId, likes: data.likes, userHasLiked: data.userHasLiked },
    });
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


// Fetch comments for a specific blog post
export const fetchComments = (blogId) => async (dispatch) => {
  try {
    const { data } = await api.get(`/api/blogs/${blogId}/comments`);
    dispatch({ type: 'FETCH_COMMENTS_SUCCESS', payload: { blogId, comments: data } });
  } catch (error) {
    dispatch({ type: 'FETCH_COMMENTS_FAIL', payload: error.message });
  }
};


// Add a comment to a blog post
export const addComment = (blogId, commentText) => async (dispatch, getState) => {
  try {
    const { auth: { token } } = getState(); // Assuming you store the token in the 'auth' slice of state

    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Add the token to the headers
        'Content-Type': 'application/json',
      },
    };

    const { data } = await api.post(`/api/blogs/${blogId}/comment`, { text: commentText }, config);

    // Dispatch success and include blogId to update the comments for the correct blog
    dispatch({ 
      type: 'ADD_COMMENT_SUCCESS', 
      payload: { 
        blogId, 
        comment: data.comment 
      } 
    });
  } catch (error) {
    dispatch({ type: 'ADD_COMMENT_FAIL', payload: error.message });
  }
};


