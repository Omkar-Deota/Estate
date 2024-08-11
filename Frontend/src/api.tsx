import axios from 'axios';

const API_URL = "https://estate-backend-kojm.onrender.com";

export const api = axios.create({
  baseURL: API_URL,
});
