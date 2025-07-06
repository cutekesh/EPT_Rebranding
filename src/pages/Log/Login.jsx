import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

// Define the Login component as a functional component.
const Login = () => {
  // Define state for form data with initial values for email and password.
  const [formData, setFormData] = useState({ email: "", password: "" });
  // Define state for error messages.
  const [error, setError] = useState("");
  // Extract the login function from the Auth context.
  const { login } = useAuth(); // Get the login function from AuthContext
  // Initialize the navigate function to redirect users after login.
  const navigate = useNavigate();

  // Handle changes in the input fields by updating the formData state.
  const handleChange = (event) => {
    // Update the formData state with the new value from the input field.
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Handle the form submission when the user tries to log in.
  const handleSubmit = async (event) => {
    // Prevent the default form submission behavior (page reload).
    event.preventDefault();
    try {
      // Call the login function from the Auth context with the form data.
      await login(formData); // Call the context's login function
      // Clear any previous error messages.
      setError("");
      // Redirect the user to the home page upon successful login.
      navigate("/"); // Redirect to the home page upon successful login
    } catch (err) {
      // If an error occurs, set the error state with the error message from the server or a default message.
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return <div>Login</div>;
};

export default Login;
