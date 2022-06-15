import axios from "axios";
import router from "@/router/router";

const BASE_AUTH_URL = "http://127.0.0.1:8000/auth/";

const authApi = axios.create({
  baseURL: BASE_AUTH_URL,
  headers: {
    accept: "application/json",
  },
});

export const registrationUser = async (email, username, password) => {
  try {
    await authApi.post("users/", { email, username, password });
    return { username, password };
  } catch (error) {
    console.log(error);
  }
};

export const getJwtToken = async (username, password) => {
  try {
    const response = await authApi.post("jwt/create/", { username, password });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const verifyToken = async (token) => {
  try {
    await authApi.post("jwt/verify/", { token });
  } catch (error) {
    console.error(error);
  }
};

export const getUserData = async (accessToken) => {
  try {
    const response = await authApi.get("users/me/", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return response.data;
  } catch (response) {
    router.push({ name: "auth" });

    return response;
  }
};
