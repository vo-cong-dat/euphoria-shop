import { KeyLocalStorage } from "@/constants/localstorage";
import axios from "axios";

const httpRequest = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

httpRequest.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(KeyLocalStorage.ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

httpRequest.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        console.warn("Token hết hạn hoặc không hợp lệ.");
      }
    }
    return Promise.reject(error?.response?.data);
  },
);

export default httpRequest;
