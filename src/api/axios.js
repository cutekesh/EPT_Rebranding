import axios from "axios";

const API_BASE_URL = "https://ept-rebranding-backend.onrender.com";

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
  signup: (username, email, password) =>
    api.post("/auth/signup", { username, email, password }),
  login: (usernameOrEmail, password) =>
    api.post("/auth/login", { usernameOrEmail, password }),
  getProfile: () => api.get("/auth/profile"), // Example protected route
  // You can add more auth-related calls here (e.g., forgotPassword, resetPassword)
};

// You can export other API categories here if needed
// export const products = {
//   getAll: () => api.get('/products'),
//   getOne: (id) => api.get(`/products/${id}`),
// };
