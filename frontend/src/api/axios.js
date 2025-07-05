import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://everything-e4g4.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
