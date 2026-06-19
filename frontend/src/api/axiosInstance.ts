import axios from 'axios';

const API = axios.create({
  baseURL: 'https://workshop-assignment-phi.vercel.app/api',
  timeout: 15000, // was 5000 — too short for a cold MongoDB connection on first request
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;