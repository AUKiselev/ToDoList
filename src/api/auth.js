import axios from "axios";

const BASE_AUTH_URL = "http://127.0.0.1:8000/auth/";

const api = axios.create({
  baseURL: BASE_AUTH_URL,
  headers: {
    accept: "application/json",
  },
});

export const registrationUser = async (email, username, password) => {
  try {
    await api.post("users/", { email, username, password });
    return { username, password };
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getJwtToken = async (username, password) => {
  try {
    const response = await api.post("jwt/create/", { username, password });
    return response.data;
  } catch (error) {
    console.log(error.response.data);
  }
};
