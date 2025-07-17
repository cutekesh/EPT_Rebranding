import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import RangeOfEquipment from "./RangeOfEquipment";
import AllEquipment from "./AllEquipment";

const Equipments = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <RangeOfEquipment/>
      <AllEquipment/>
      <Footer />
    </div>
  );
};

export default Equipments;
