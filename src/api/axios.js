import axios from "axios";
const BASE_URL = "http://192.168.0.11:8081/api/v1/";

export const api = axios.create({
  baseURL: BASE_URL,
  // withCredentials: true,
  headers: {
    accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE",
  },
});
