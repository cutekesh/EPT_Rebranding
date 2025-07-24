import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/white ept logo.png";
import facebooklogo from "../../assets/raphael_facebook.png";
import instagramlogo from "../../assets/streamline_instagram-solid.png";
import xlogo from "../../assets/streamline-logos_x-twitter-logo-block.png";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const response = await axios.post("http://localhost:5000/api/subscribe", { email });
      setMessage("Successfully subscribed! Check your email for confirmation.");
      setEmail("");
    } catch (error) {
      setMessage("Failed to subscribe. Please try again or contact support.");
      console.error("Subscription error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-[#013F1E] text-[#FBFEFF] pt-[50px] font-Inter">
      <div className="w-11/12 container mx-auto grid grid-cols-1 lg:flex lg:gap-[60px] justify-between">
        <div className="lg:w-1/3">
          <Link to="/">
            <img src={logo} alt="ept logo" />
          </Link>

          {/* Desktop Newsletter */}
          <div className="hidden lg:block">
            <p className="text-base font-semibold mb-3 mt-[35px]">
              Subscribe to Our Newsletters
            </p>
            <form className="relative mb-6" onSubmit={handleSubscribe}>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="bg-white text-black w-full h-11 rounded-md px-4 placeholder:text-[#969797] text-sm focus:outline-none"
                required
              />
              <button
                type="submit"
                className="absolute w-24 right-0.5 top-0.5 bg-[#008A3F] px-5 h-10 rounded-md text-sm font-medium hover:bg-[#006A3F]"
                disabled={isLoading}
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
            {message && <p className="text-sm text-[#D1FFE7] mt-2">{message}</p>}

            <div className="flex items-center gap-4 mt-[38.23px]">
              <p className="text-sm font-medium">Connect With Us</p>
              <div className="flex gap-2">
                <img className="w-5 cursor-pointer" src={facebooklogo} alt="facebook" />
                <img className="w-5 cursor-pointer" src={instagramlogo} alt="instagram" />
                <img className="w-5 cursor-pointer" src={xlogo} alt="twitter-x" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:flex gap-[68px] lg:gap-[74px]">
          {/* Company Links */}
          <div className="mt-[33px] lg:mt-0">
            <h3 className="text-lg font-bold mb-[25.47px]">Company</h3>
            <ul className="space-y-[25.47px] text-[15.67px] font-medium">
              <li><Link to="#" className="hover:underline">About EPT</Link></li>
              <li><Link to="#" className="hover:underline">Leadership</Link></li>
              <li><Link to="#" className="hover:underline">Careers</Link></li>
              <li><Link to="#" className="hover:underline">Training & Certification</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="">
            <h3 className="text-lg font-bold mb-[25.47px]">Services</h3>
            <ul className="space-y-[25.47px] text-[15.67px]">
              <li><Link to="#" className="hover:underline">EPT Services</Link></li>
              <li><Link to="#" className="hover:underline">Engineering Design</Link></li>
              <li><Link to="/equipments" className="hover:underline">Equipment Rental</Link></li>
              <li><Link to="#" className="hover:underline">Project Support</Link></li>
              <li><Link to="#" className="hover:underline">Plant Construction</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:flex-1">
            <h3 className="text-lg font-bold mb-[25.47px]">Contact Us</h3>
            <div className="space-y-[25.47px] text-[15.67px] font-medium">
              <p>
                Energy & Plant Technology Limited <br /> RC: 7956423
              </p>
              <p>
                Lagos Office: 26 Furo Ezimora Street <br /> Lekki Phase 1, Lagos, Nigeria
              </p>
              <div>
                <p>Email: sales@ept.ng</p>
                <p>Phone: +234 708 020 0099</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Newsletter & Social */}
        <div className="lg:hidden">
          <hr className="my-[33px] border-[#D1FFE74D]" />
          <p className="text-base font-bold mb-3">
            Subscribe to Our Newsletters
          </p>
          <form className="relative mb-6 w-full" onSubmit={handleSubscribe}>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="bg-white text-black w-full h-11 rounded-md px-4 placeholder:text-[#969797] text-sm focus:outline-none"
              required
            />
            <button
              type="submit"
              className="absolute right-0 top-0 bg-[#008A3F] px-10 h-11 rounded-md text-[12px] font-bold hover:bg-[#006A3F]"
              disabled={isLoading}
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
          {message && <p className="text-sm text-[#D1FFE7] mt-2">{message}</p>}

          <div className="flex items-center gap-6">
            <p className="text-sm font-medium">Connect With Us</p>
            <div className="flex gap-3 cursor-not-allowed">
              <img className="w-5 cursor-pointer" src={facebooklogo} alt="facebook" />
              <img className="w-5 cursor-pointer" src={instagramlogo} alt="instagram" />
              <img className="w-5 cursor-pointer" src={xlogo} alt="twitter-x" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-11/12 mx-auto lg:mt-[131px] pb-[81.04px]">
        <hr className="my-[33px] border-[#D1FFE74D] block lg:hidden" />
        <p className="text-center text-[12px] lg:text-[15.67px] font-medium">
          © 2025 Energy & Plant Technology Ltd. All Rights Reserved.
          <br className="hidden md:block" /> Built with precision. Powered by innovation.
        </p>
      </div>
    </footer>
  );
};

export default Footer;