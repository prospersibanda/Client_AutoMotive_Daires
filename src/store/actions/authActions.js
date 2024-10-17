import axios from 'axios';

// User login
export const loginUser = (email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post('/api/auth/login', { email, password });
    dispatch({ type: 'LOGIN_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAIL', payload: error.message });
  }
};

// User signup
export const signupUser = (userData) => async (dispatch) => {
  try {
    const { data } = await axios.post('/api/auth/signup', userData);
    dispatch({ type: 'SIGNUP_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'SIGNUP_FAIL', payload: error.message });
  }
};
