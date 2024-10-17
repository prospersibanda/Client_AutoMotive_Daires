import axios from 'axios';

// Fetch all categories
export const fetchCategories = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/categories'); // Adjust the endpoint as per your backend
    dispatch({ type: 'FETCH_CATEGORIES_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_CATEGORIES_FAIL', payload: error.message });
  }
};
