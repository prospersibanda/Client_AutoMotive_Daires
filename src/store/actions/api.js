import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Replace with your backend's URL

const api = axios.create({
  baseURL: API_URL,
});

export default api;
