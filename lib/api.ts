import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";
import {
  requestInterceptor,
  successInterceptor,
  errorInterceptor,
} from "./interceptors";

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: "http://localhost:8000/api",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

const api: AxiosInstance = axios.create(axiosRequestConfig);

api.interceptors.request.use(requestInterceptor);
api.interceptors.response.use(successInterceptor, errorInterceptor);

export { api };
