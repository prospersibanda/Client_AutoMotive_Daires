import axios from 'axios';

// Create an axios instance for API requests
const api = axios.create({
  baseURL: 'http://localhost:5000', // Ensure the correct base URL is used
});

// Add a request interceptor to attach the token to all requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      console.log('Attaching token to request:', token); // Add this log
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default api;
