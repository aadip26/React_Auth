// api.js

import axios from 'axios';

const api = axios.create({
    baseURL: process.env.BASE_URL,
    withCredentials: true, // Enable sending cookies with requests
});

export default api;
