import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chatapp-ns1e.onrender.com/api" : "/api",
  withCredentials: true,
});
