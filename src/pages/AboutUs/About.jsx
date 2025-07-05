import React from "react";
import MeetOurCeo from "../../components/meet us/MeetOurCeo";
import MeetThePeople from "../../components/meet us/MeetThePeople";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
const About = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Banner />
      <MeetOurCeo />
      <div className="bg-[#F9FFFC]">
        <MeetThePeople />
      </div>
      <Footer />
    </div>
  );
};

export default About;
