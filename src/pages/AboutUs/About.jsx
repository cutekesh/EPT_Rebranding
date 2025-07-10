import React from "react";
import MeetOurCeo from "../../components/meet us/MeetOurCeo";
import MeetThePeople from "../../components/meet us/MeetThePeople";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Energylevel from "../../components/meet us/Energylevel";
import Covenant from "./Sections/Covenant";
import WhatWeDo from "./Sections/WhatWeDo";
import Testimonials from "../Home/Sections/ClientTestimonials/Testimonials";
import Partners from "../Home/Sections/OurPartners/Partners";

const About = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <WhatWeDo />
      <div className="hidden md:block"><Covenant /></div>
      <div className="block md:hidden -mt-4"><Testimonials /></div>
      <Banner />
      <Energylevel />
      <MeetOurCeo />
      <div className="md:bg-[#F9FFFC]">
        <MeetThePeople />
      </div>
      <div className="hidden md:block"><Testimonials /></div>
      <div className="hidden md:block"><Partners /></div>
      <Footer />
    </div>
  );
};

export default About;
