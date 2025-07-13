import { useState } from "react";
import "./App.css";
import Homepage from "./pages/Home/Homepage";
import About from "./pages/AboutUs/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./pages/Services/Services";
import Contact from "./pages/Mail/Contact";
import Login from "./pages/Log/Login";
import Register from "./pages/Secure/Register";
import ResetPassword from "./pages/Reset/ResetPassword";
import ForgotPassword from "./pages/Reset/ForgotPassword";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/passwordreset" element={<ResetPassword />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
