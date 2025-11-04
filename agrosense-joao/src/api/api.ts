import axios from "axios";

export const api = axios.create({
  baseURL: "http://10.150.121.60:8080/api", 
});
