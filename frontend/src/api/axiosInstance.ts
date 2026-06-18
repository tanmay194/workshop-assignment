import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api', // Central base API path
  timeout: 5000,                        // Disconnect if server takes longer than 5 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;