import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const Register = () => {
  // State for holding form input values: email, password, and repeatPassword.
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });
  // State for holding error messages during registration.
  const [error, setError] = useState("");
  // State for holding success messages when registration is successful.
  const [success, setSuccess] = useState("");
  // Extract the register function from the Auth context to handle registration.
  const { register } = useAuth(); // Get the register function from the AuthContext

  // Event handler for updating form data when the user types in input fields.
  const handleChange = (event) => {
    // Update the corresponding property in formData based on the input's name attribute.
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Event handler for form submission.
  const handleSubmit = async (event) => {
    // Prevent the default form submission behavior (which would refresh the page).
    event.preventDefault();
    try {
      // Call the register function (from Auth context) with the form data.
      await register(formData);
      // If registration is successful, show a success message.
      setSuccess("Registration successful. Please log in.");
      // Clear any previous error messages.
      setError("");
    } catch (err) {
      // If an error occurs, update the error state with the server's message or a default one.
      setError(err.response?.data?.message || "Registration failed");
    }
  };
  return <div>Register</div>;
};

export default Register;
