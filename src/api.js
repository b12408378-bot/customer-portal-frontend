// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/user-service-auth", // Gateway path to user service
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Attach JWT if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwtToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    delete config.headers.Authorization;
  }
  return config;
});

export default api;
