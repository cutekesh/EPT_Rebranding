
import React from 'react'
import EngineeringDesign from '../../components/services/EngineeringDesign'
import WhatIsFeed from '../../components/services/WhatIsFeed'
import ProvenFeedProcess from '../../components/services/ProvenFeedProcess'
import DuringFeed from '../../components/services/DuringFeed'
import GettingFeedRight from '../../components/services/GettingFeedRight'
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Services = () => {
  return (
    <div className="bg-white">
      <Navbar />
    <EngineeringDesign/>
      <WhatIsFeed/>
      <ProvenFeedProcess/>
      <DuringFeed/>
      <GettingFeedRight/>
      <Footer />
    </div>
  );
};

export default Services
