import axios from "axios";

const api = axios.create({
  baseURL: "https://indus-school-r.onrender.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
