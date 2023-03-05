import axios from "axios";
import { store } from "../store";

const axiosService = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://172.20.10.3:80/api/",
  headers: {
    "Content-Type": "application/json",
    "X-CSRF-TOKEN": document
      .querySelector("[name=csrf-token]")
      .getAttribute("content"),
  },
});

axiosService.interceptors.request.use(async (config: any) => {
  const { token } = store.getState().auth;
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosService;
