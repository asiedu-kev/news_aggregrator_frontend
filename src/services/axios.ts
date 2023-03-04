import axios from "axios";
import store from "../store";

const axiosService = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || "",
    headers: {
        "Content-Type": "application/json",
    },
});

axiosService.interceptors.request.use(async (config: any) => {
    const { token } = store.getState().auth;
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export default axiosService;
