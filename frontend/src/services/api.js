import axios from "axios";

// 🔥 IMPORTANT: your deployed backend URL (Render)
const API = axios.create({
  baseURL: "https://anwar-portfolio-1.onrender.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// OPTIONAL: helpful for debugging
API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("API ERROR:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default API;