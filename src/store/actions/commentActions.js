import axios from 'axios';

// Fetch comments for a blog
export const fetchComments = (blogId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/blogs/${blogId}/comments`);
    dispatch({ type: 'FETCH_COMMENTS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_COMMENTS_FAIL', payload: error.message });
  }
};

// Add a comment to a blog
export const addComment = (blogId, commentData) => async (dispatch) => {
  try {
    const { data } = await axios.post(`/api/blogs/${blogId}/comment`, commentData);
    dispatch({ type: 'ADD_COMMENT_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'ADD_COMMENT_FAIL', payload: error.message });
  }
};
