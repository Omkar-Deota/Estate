// import axios from 'axios';

// const API_URL = 'http://127.0.0.1:27017/5000/api/properties';

// export const Api = axios.create({
//     baseURL: API_URL,
// });
// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Backend API URL

export const api = axios.create({
  baseURL: API_URL,
});
