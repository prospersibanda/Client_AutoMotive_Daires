import axios from "axios";

// Create an axios instance for API requests
const api = axios.create({
  baseURL: "http://localhost:5000", // Ensure the correct base URL is used
});

// Add a request interceptor to attach the token to all requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Get the token from localStorage
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // Attach the token to the Authorization header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
