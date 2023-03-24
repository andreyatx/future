import axios from "axios";

export const api = axios.create({
  baseURL: "https://www.googleapis.com",
});

api.interceptors.request.use((config: any) => {
  return config;
});
