import React, { createContext, useContext, useEffect, useState } from "react";

import { auth as apiAuth } from "../api/axios";
import { auth as firebaseAuth } from "../api/firebaseConfig"; // Import 'auth' from YOUR firebaseConfig.js
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"; // Import other functions from firebase/auth
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Stores user info (e.g., { id, username, email })
  const [isLoading, setIsLoading] = useState(true); // To check if initial authentication status is loaded
  const navigate = useNavigate(); // Initialize useNavigate
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
          const response = await apiAuth.getProfile(); // This uses the interceptor to send token
          setUser(response.data.user); // Assuming your backend sends user data with profile
        } catch (error) {
          console.error("Token validation failed or expired:", error);
          localStorage.removeItem("jwtToken"); // Clear invalid token
          setUser(null);
          navigate("/login"); // Redirect to login on token expiry
        } finally {
          setIsLoading(false);
        }
      };
      fetchUserProfile();
    } else {
      setIsLoading(false);
    }
  }, [navigate]);

  const login = async (email, password) => {
    try {
      const response = await apiAuth.login(email, password);
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

  const signup = async (name, email, password) => {
    try {
      const response = await apiAuth.signup(name, email, password);
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

  const firebaseGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(firebaseAuth, provider);
      const firebaseUser = result.user;

      const idToken = await firebaseUser.getIdToken();

      const response = await apiAuth.googleLogin(idToken); // Use apiAuth
      const { token, user: userData } = response.data;
      localStorage.setItem("jwtToken", token);
      setUser(userData);
      return true;
    } catch (error) {
      console.error("Firebase Google login failed:", error.code, error.message);
      setUser(null);
      if (error.code === "auth/popup-closed-by-user") {
        return false;
      }
      throw error.response
        ? error.response.data.message
        : "Google login failed.";
    }
  };

  const logout = () => {
    localStorage.removeItem("jwtToken"); // Remove the JWT
    setUser(null); // Clear user state
    firebaseAuth.signOut();
    navigate("/login");
  };

  const initiateForgotPassword = async (email) => {
    try {
      const responseMessage = await apiAuth.forgotPassword(email);
      return responseMessage;
    } catch (err) {
      console.error(
        "Forgot password request failed:",
        err.response ? err.response.data.message : err.message
      );
      throw err.response
        ? err.response.data.message
        : "Error requesting password reset.";
    }
  };

  const completePasswordReset = async (token, newPassword) => {
    try {
      const responseMessage = await apiAuth.resetPassword(token, newPassword);
      return responseMessage;
    } catch (err) {
      console.error(
        "Password reset failed:",
        err.response ? err.response.data.message : err.message
      );
      throw err.response
        ? err.response.data.message
        : "Error resetting password.";
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        signup,
        logout,
        googleLogin: firebaseGoogleLogin,
        initiateForgotPassword,
        completePasswordReset,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
