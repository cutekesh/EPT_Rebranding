import React, { createContext, useContext, useEffect, useState } from "react";
import { auth as apiAuth } from "../api/axios";
import { auth as firebaseAuth } from "../api/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // On app load, try to retrieve token and validate, but only if user is not already set
    const token = localStorage.getItem("jwtToken");
    if (token && !user) {
      const fetchUserProfile = async () => {
        try {
          const response = await apiAuth.getProfile();
          console.log("Profile fetch response:", response.data); // Debug log
          setUser(response.data.user);
        } catch (error) {
          console.error("Token validation failed:", {
            message: error.message,
            response: error.response?.data,
            status: error.response?.status,
          });
          if (error.response?.status === 401) {
            // Only clear token on explicit unauthorized error
            localStorage.removeItem("jwtToken");
            setUser(null);
            navigate("/login"); // Redirect to login only for 401
          }
        } finally {
          setIsLoading(false);
        }
      };
      fetchUserProfile();
    } else {
      setIsLoading(false);
    }
  }, [navigate, user]); // Add user as dependency to avoid re-running if user is set

  const login = async (email, password) => {
    try {
      const response = await apiAuth.login(email, password);
      const { token, user: userData } = response.data;
      localStorage.setItem("jwtToken", token);
      setUser(userData);
      console.log("Login successful, user set:", userData); // Debug log
      return true;
    } catch (error) {
      console.error(
        "Login failed:",
        error.response ? error.response.data.message : error.message
      );
      setUser(null);
      return false;
    }
  };

  const signup = async (name, email, password) => {
    try {
      const response = await apiAuth.signup(name, email, password);
      if (response.data.token) {
        const { token, user: userData } = response.data;
        localStorage.setItem("jwtToken", token);
        setUser(userData);
        console.log("Signup successful, user set:", userData); // Debug log
      }
      return true;
    } catch (error) {
      console.error(
        "Signup failed:",
        error.response ? error.response.data.message : error.message
      );
      setUser(null);
      return false;
    }
  };

  const firebaseGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(firebaseAuth, provider);
      const firebaseUser = result.user;
      const idToken = await firebaseUser.getIdToken();
      const response = await apiAuth.googleLogin(idToken);
      const { token, user: userData } = response.data;
      localStorage.setItem("jwtToken", token);
      setUser(userData);
      console.log("Google login successful, user set:", userData); // Debug log
      return true;
    } catch (error) {
      console.error("Firebase Google login failed:", {
        code: error.code,
        message: error.message,
        response: error.response?.data,
      });
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
    localStorage.removeItem("jwtToken");
    setUser(null);
    firebaseAuth.signOut();
    navigate("/login");
    console.log("Logout successful, user cleared"); // Debug log
  };

  const initiateForgotPassword = async (email) => {
    try {
      const response = await apiAuth.forgotPassword(email);
      return response.data.message;
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
      const response = await apiAuth.resetPassword(token, newPassword);
      return response.data.message;
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