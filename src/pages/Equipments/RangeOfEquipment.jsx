import React from "react";
import equipmentImage from "../../assets/equipmentPageImage.png";

const RangeOfEquipment = () => {
  return (
    <div className="bg-[#008A3F] md:flex md:align-middle md:justify-content-center md:w-full">
      <div className=" pt-18 pb-16 px-10 text-[#FEFFFF] md:w-1/2 md:my-auto lg:mx-17 md:p-0 md:mx-10">
        <p className="text-[11px] font-medium font-Inter lg:text-[24px] md:text-[13px]">
          EQUIPMENTS
        </p>
        <h1 className="text-[25px] font-bold  font-IBM leading-10 tracking-wide lg:text-[60px] lg:leading-20 ]">
          Explore Our Full <br /> Range Of Equipment
        </h1>
      </div>
      <div className="w-full md:w-1/2">
        <img
          className="w-full lg:h-full"
          src={equipmentImage}
          alt="group of people discussing"
        />
      </div>
    </div>
  );
};

export default RangeOfEquipment;
