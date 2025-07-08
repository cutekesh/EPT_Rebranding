import React, { useState } from 'react'; // Import useState

const ContactFormSection = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  // State to manage validation errors
  const [errors, setErrors] = useState({});

  // State for success/error messages after submission attempt
  const [submissionMessage, setSubmissionMessage] = useState('');

  // State to track if the form is currently being sent (for disabling inputs)
  const [isSending, setIsSending] = useState(false);

  // Handle input changes and clear corresponding error
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    // Clear the error for the specific field as user types
    if (errors[id]) {
      setErrors((prevErrors) => ({ ...prevErrors, [id]: '' }));
    }
    // Clear general submission message if user starts typing again
    if (submissionMessage) {
      setSubmissionMessage('');
    }
  };

  // Validation logic
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^\+?[0-9\s-()]{7,20}$/.test(formData.phone.trim())) { // Basic phone number regex
      newErrors.phone = 'Please enter a valid phone number.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) { // Basic email regex
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors); // Update the errors state
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const isValid = validateForm(); // Run validation

    if (isValid) {
      setIsSending(true); // Disable inputs and button
      setSubmissionMessage(''); // Clear previous submission messages

      try {
        // Simulate API call or EmailJS send
        // In a real application, you would replace this with your actual fetch or emailjs.send call
        console.log('Form data submitted:', formData);
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

        // Simulate success
        setSubmissionMessage('Your message has been sent successfully!');
        setFormData({ name: '', phone: '', email: '', message: '' }); // Clear form
        setErrors({}); // Clear any lingering errors

      } catch (error) {
        console.error('Form submission error:', error);
        setSubmissionMessage('Failed to send your message. Please try again.');
      } finally {
        setIsSending(false); // Re-enable inputs and button
        setTimeout(() => setSubmissionMessage(''), 5000); // Clear message after 5 seconds
      }
    } else {
      setSubmissionMessage('Please correct the errors in the form.');
    }
  };

  return (
    <div className="p-8 bg-[#E6F3EC] rounded-md">
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-[#000101] mb-4">GET IN TOUCH</h2>
        <div className='border-b-[1px] border-[#000000] w-full mt-8 mb-10'></div>
      </div>

      <form className="space-y-8" onSubmit={handleSubmit}> {/* Add onSubmit handler */}
        <div className='flex flex-col md:flex-row justify-between gap-4'>
          <div className='w-full md:flex-1'>
            <label htmlFor="name" className="block font-Inter text-[#000101] font-bold mb-1">NAME</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name*"
              className={`w-full p-3 font-Inter bg-[#FFFFFF] rounded-md focus:outline-none text-[#969797] hover:ring-1 hover:ring-[#008A3F] ${errors.name ? 'border-red-500 ring-red-500' : ''}`}
              value={formData.name} // Controlled component
              onChange={handleChange} // Handle changes
              disabled={isSending} // Disable when sending
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>} {/* Display error */}
          </div>
          <div className='w-full md:flex-1'>
            <label htmlFor="phone" className="block font-Inter text-[#000101] font-bold mb-1">PHONE</label>
            <input
              type="tel" // Use type="tel" for phone numbers
              id="phone"
              placeholder="Enter your phone number*"
              className={`w-full p-3 font-Inter bg-[#FFFFFF] rounded-md focus:outline-none text-[#969797] hover:ring-1 hover:ring-[#008A3F] ${errors.phone ? 'border-red-500 ring-red-500' : ''}`}
              value={formData.phone} // Controlled component
              onChange={handleChange} // Handle changes
              disabled={isSending} // Disable when sending
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>} {/* Display error */}
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block font-Inter text-[#000101] font-bold mb-1">EMAIL</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email*"
            className={`w-full p-3 font-Inter bg-[#FFFFFF] rounded-md focus:outline-none text-[#969797] hover:ring-1 hover:ring-[#008A3F] ${errors.email ? 'border-red-500 ring-red-500' : ''}`}
            value={formData.email} // Controlled component
            onChange={handleChange} // Handle changes
            disabled={isSending} // Disable when sending
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>} {/* Display error */}
        </div>

        <div>
          <label htmlFor="message" className="block font-Inter text-[#000101] font-bold mb-1">MESSAGE</label>
          <textarea
            id="message"
            placeholder="Write your message here*"
            rows="5"
            className={`w-full p-3 font-Inter bg-[#FFFFFF] rounded-md focus:outline-none text-[#969797] hover:ring-1 hover:ring-[#008A3F] resize-y ${errors.message ? 'border-red-500 ring-red-500' : ''}`}
            value={formData.message} // Controlled component
            onChange={handleChange} // Handle changes
            disabled={isSending} // Disable when sending
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>} {/* Display error */}
        </div>

        <button
          type="submit"
          className="w-full h-[50px] bg-[#008A3F] text-[#FEFFFF] rounded-md hover:bg-[#006A3F] transition-colors hover:cursor-pointer font-Inter font-bold text-[23px] disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSending} // Disable button when sending
        >
          {isSending ? 'Sending...' : 'Send Message'} {/* Change button text */}
        </button>

        {submissionMessage && (
          <p className={`text-center mt-4 ${submissionMessage.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
            {submissionMessage}
          </p>
        )}
      </form>
    </div>
  )
}

export default ContactFormSection
