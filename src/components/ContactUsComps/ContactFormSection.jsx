import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import emailIcon from "../../assets/contactFormEmailIcon.png";
import closeIcon from "../../assets/closeModalIcon.svg";

const ContactFormSection = ({ onSuccess }) => { 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // State to manage validation errors
  const [errors, setErrors] = useState({});

  // State for success/error messages after submission attempt
  const [submissionMessage, setSubmissionMessage] = useState("");

  // State to track if the form is currently being sent (for disabling inputs)
  const [isSending, setIsSending] = useState(false);

  // Initialize EmailJS when the component mounts
  useEffect(() => {
    try {
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (publicKey) {
        emailjs.init(publicKey);
        console.log("EmailJS initialized with public key:", publicKey);
      } else {
        console.error(
          "EmailJS Public Key is not defined. Please check your .env file (VITE_EMAILJS_PUBLIC_KEY)."
        );
        setSubmissionMessage("Error: Email service not configured. Public Key missing.");
      }
    } catch (error) {
      console.error("Failed to initialize EmailJS:", error);
      setSubmissionMessage("Error: Failed to initialize email service.");
    }
  }, []);

  // Handle input changes and clear corresponding error
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    // Clear the error for the specific field as user types
    if (errors[id]) {
      setErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
    }
    // Clear general submission message if user starts typing again
    if (submissionMessage) {
      setSubmissionMessage("");
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      setIsSending(true);
      setSubmissionMessage("");

      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY; // Ensure publicKey is also available here

      // Check if all EmailJS IDs are available before sending
      if (!serviceID || !templateID || !publicKey) {
        const missingKeys = [];
        if (!serviceID) missingKeys.push("Service ID");
        if (!templateID) missingKeys.push("Template ID");
        if (!publicKey) missingKeys.push("Public Key");
        const errorMessage = `Email service not fully configured. Missing: ${missingKeys.join(", ")}. Please check your .env file.`;
        console.error(errorMessage);
        setSubmissionMessage(errorMessage);
        setIsSending(false);
        setTimeout(() => setSubmissionMessage(""), 5000);
        return;
      }

      try {
        await emailjs.send(serviceID, templateID, {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }, publicKey);

        // if message is successfully sent, notify parent to show the modal
        if (onSuccess) {
          onSuccess();
        }
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } catch (error) {
        console.error("EmailJS send error:", error); 
        let userMessage = "Failed to send your message. Please try again.";
        if (error.status && error.text) {
          userMessage += ` (Status: ${error.status}, Message: ${error.text})`;
        } else if (error.message) {
          userMessage += ` (Error: ${error.message})`;
        }
        setSubmissionMessage(userMessage);
        setTimeout(() => setSubmissionMessage(""), 5000);
      } finally {
        setIsSending(false); 
      }
    } else {
      setSubmissionMessage("Please correct the errors in the form.");
      // Clear message after 5 seconds if validation fails
      setTimeout(() => setSubmissionMessage(""), 5000);
    }
  };


  return (
    <div className="p-8 bg-[#E6F3EC] rounded-md h-full">
      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="">
          <div className="w-full md:flex-1">
            <label
              htmlFor="name"
              className="block font-Inter text-[#000101] font-bold mb-1"
            >
              NAME
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name*"
              className={`w-full p-3 font-Inter bg-[#FFFFFF] rounded-md focus:outline-none text-black placeholder:text-[#969797] hover:ring-1 hover:ring-[#008A3F] ${
                errors.name ? "border-red-500 ring-red-500" : ""
              }`}
              value={formData.name}
              onChange={handleChange}
              disabled={isSending}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block font-Inter text-[#000101] font-bold mb-1"
            >
            EMAIL
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email*"
            className={`w-full p-3 font-Inter bg-[#FFFFFF] rounded-md focus:outline-none text-black placeholder:text-[#969797] hover:ring-1 hover:ring-[#008A3F] ${
              errors.email ? "border-red-500 ring-red-500" : ""
            }`}
            value={formData.email}
            onChange={handleChange}
            disabled={isSending}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block font-Inter text-[#000101] font-bold mb-1"
            >
            MESSAGE
          </label>
          <textarea
            id="message"
            placeholder="Write your message here*"
            rows="7"
            className={`w-full p-3 font-Inter bg-[#FFFFFF] rounded-md focus:outline-none text-black placeholder:text-[#969797] hover:ring-1 hover:ring-[#008A3F] resize-y ${
              errors.message ? "border-red-500 ring-red-500" : ""
            }`}
            value={formData.message}
            onChange={handleChange}
            disabled={isSending}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full h-[50px] bg-[#008A3F] text-[#FEFFFF] rounded-md hover:bg-[#006A3F] transition-colors hover:cursor-pointer font-Inter font-bold text-[23px] disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>

        {submissionMessage && (
          <p
            className={`text-center mt-4 ${
              submissionMessage.includes("success")
                ? "text-green-600"
                : submissionMessage.includes("Error:") ? "text-red-600" : "text-red-600"
            }`}
          >
            {submissionMessage}
          </p>
        )}
      </form>
      <img src="" alt="" />
    </div>
  );
};

export default ContactFormSection;
