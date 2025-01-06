// src/api/axios.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerUser = (email: string, password: string) => {
  return axiosInstance.post('/register', { email, password });
};

export const resetPassword = (email: string, newPassword: string) => {
  return axiosInstance.post('/reset-password', { email, newPassword });
};

export const loginUser = (email: string, password: string) => {
  return axiosInstance.post('/login', { email, password });
};

// export const landingUser = (email: string) => {
//   return axiosInstance.post('/landing', { email });
// };

// export const loginUser = (email: string, password: string) => {
//   //return axiosInstance.post('/login', { email, password });
//   return axiosInstance.get('/retrieve', { email, password });
// };