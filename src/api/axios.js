import axios from "axios";

const API_BASE_URL = "https://ept-backend.onrender.com";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the JWT token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const auth = {
  signup: (name, email, password) =>
    api.post("/api/auth/signup", { name, email, password }),
  login: (email, password) => api.post("/api/auth/login", { email, password }),
  getProfile: () => api.get("/api/auth/profile"), // Example protected route

  googleLogin: (idToken) =>
    api.post("/api/auth/google-login", { id_token: idToken }),
  forgotPassword: (email) => api.post("/auth/forgot-password", { email }),
  resetPassword: (token, newPassword) =>
    api.post(`/api/auth/reset-password/${token}`, { newPassword }),
};

export default api;
