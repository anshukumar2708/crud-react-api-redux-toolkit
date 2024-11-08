import axios from "axios";
import { API_CONFIG } from "../utils/api-path";

export const axiosInstance = axios.create({
  baseURL: API_CONFIG.baseUrl,
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
