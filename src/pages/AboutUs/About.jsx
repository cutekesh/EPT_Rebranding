import React from "react";
import MeetOurCeo from "../../components/meet us/MeetOurCeo";
import MeetThePeople from "../../components/meet us/MeetThePeople";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Energylevel from "../../components/meet us/Energylevel";
import Covenant from "./Sections/Covenant";
import WhatWeDo from "./Sections/WhatWeDo";

const About = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <WhatWeDo />
      <Covenant />
      <Banner />
      <Energylevel />
      <MeetOurCeo />
      <div className="bg-[#F9FFFC]">
        <MeetThePeople />
      </div>
      <Footer />
    </div>
  );
};

export default About;
