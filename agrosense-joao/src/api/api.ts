import axios from "axios";

export const api = axios.create({
  baseURL: "http://10.58.70.60:8080/api",
});
