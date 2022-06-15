import { useUserStore } from "@/store/user";
import axios from "axios";
import router from "@/router/router";

const BASE_URL = "http://127.0.0.1:8000/";
const UNAUTHORIZED = 401;

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const userStore = useUserStore();
    config.headers["Authorization"] = `Bearer ${userStore.accessToken}`;

    return config;
  },
  (response) => {
    if (response.status === UNAUTHORIZED) {
      router.push({ name: "auth" });
    }

    return response;
  }
);
