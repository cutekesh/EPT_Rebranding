import React, { createContext, useContext, useEffect, useState } from "react";

import { auth } from "../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Stores user info (e.g., { id, username, email })
  const [isLoading, setIsLoading] = useState(true); // To check if initial authentication status is loaded

  useEffect(() => {
    // On app load, try to retrieve token and validate
    const token = localStorage.getItem("jwtToken");
    if (token) {
      // In a real app, you might want to send this token to a backend
      // endpoint like /api/auth/verifyToken to ensure it's still valid
      // and get fresh user data. For simplicity here, we'll just set user if token exists.
      // A better approach: decode JWT on frontend (for non-sensitive data)
      // or make a call to /api/auth/profile to validate and get user details.

      // Example: Simple token existence check (less secure but works)
      // For production, always validate token with backend.
      // Since our backend's /api/auth/profile needs a token, let's use it.
      const fetchUserProfile = async () => {
        try {
          const response = await auth.getProfile(); // This uses the interceptor to send token
          setUser(response.data.user); // Assuming your backend sends user data with profile
        } catch (error) {
          console.error("Token validation failed or expired:", error);
          localStorage.removeItem("jwtToken"); // Clear invalid token
          setUser(null);
        } finally {
          setIsLoading(false);
        }
      };
      fetchUserProfile();
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = async (usernameOrEmail, password) => {
    try {
      const response = await auth.login(usernameOrEmail, password);
      const { token, user: userData } = response.data;
      localStorage.setItem("jwtToken", token); // Store the JWT
      setUser(userData); // Set user data in state
      return true; // Indicate success
    } catch (error) {
      console.error(
        "Login failed:",
        error.response ? error.response.data.message : error.message
      );
      setUser(null);
      return false; // Indicate failure
    }
  };

  const signup = async (username, email, password) => {
    try {
      const response = await auth.signup(username, email, password);
      // If backend automatically logs in on signup, store token and user
      if (response.data.token) {
        const { token, user: userData } = response.data;
        localStorage.setItem("jwtToken", token);
        setUser(userData);
      }
      return true; // Indicate success
    } catch (error) {
      console.error(
        "Signup failed:",
        error.response ? error.response.data.message : error.message
      );
      setUser(null);
      return false; // Indicate failure
    }
  };

  const logout = () => {
    localStorage.removeItem("jwtToken"); // Remove the JWT
    setUser(null); // Clear user state
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
