import React from "react";
import EPTAdvantage from "./Sections/WhyChooseUs/EPTAdvantage";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Expertise from "./Sections/WhatWeDo/Expertise";
import ProvenProcess from "./Sections/HowItWorks/ProvenProcess";
import Testimonials from "./Sections/ClientTestimonials/Testimonials";
import Footer from "../../components/Footer/Footer";
import Partners from "./Sections/OurPartners/Partners";

const Homepage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <EPTAdvantage />
      <Expertise />
      <ProvenProcess />
      <Testimonials />
      <Partners/>
      <Footer />
    </div>
  );
};

export default Homepage;
