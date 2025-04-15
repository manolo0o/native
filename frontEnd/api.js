// src/api.js
import axios from 'axios';
import { IP_BGA } from '@env';

const api = axios.create({
  baseURL: `http://${IP_BGA}:3000`, // ✅ interpolación correcta
});

export default api;

