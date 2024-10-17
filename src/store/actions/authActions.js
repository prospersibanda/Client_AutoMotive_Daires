import api from './api'; // Import the configured Axios instance

// Login action
// Login action
export const login = (userCredentials) => async (dispatch) => {
    try {
      const { data } = await api.post('/api/auth/login', userCredentials); // Backend API call
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          userData: data.userData, // Extract user data from response
          token: data.token,       // Extract token from response
        },
      });
      localStorage.setItem('token', data.token); // Optionally store token in localStorage
    } catch (error) {
      dispatch({
        type: 'LOGIN_FAIL',
        payload: error.response?.data?.message || 'Login failed',
      });
    }
  };
// Signup action
export const signup = (userData) => async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      const { data } = await api.post('/api/auth/signup', userData, config); // Call backend
  
      // Dispatch success action
      dispatch({ type: 'SIGNUP_SUCCESS', payload: data });
  
      // Optionally log or handle the success message here
      console.log(data.message);
    } catch (error) {
      // Dispatch failure action
      dispatch({
        type: 'SIGNUP_FAIL',
        payload: error.response?.data?.message || 'Signup failed',
      });
    }
  };

