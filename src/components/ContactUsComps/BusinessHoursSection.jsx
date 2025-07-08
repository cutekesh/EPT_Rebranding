import React from "react";

const BusinessHoursSection = () => {
  return (
    <div className=" p-6 md:p-8 rounded-lg bg-[#E6F3EC]">
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-[#000101] mb-6">
          BUSINESS HOURS
        </h2>
        <div className="border-b-[1px] border-[#000000] w-full mt-8 mb-10"></div>
      </div>
      <div className="space-y-7">
        <div className="flex justify-between text-[#000101]">
          <span className="font-bold">MONDAY - FRIDAY</span>
          <span>8:00 AM - 5:00 PM</span>
        </div>
        <div className="flex justify-between text-[#000101]">
          <span className="font-bold">SATURDAY</span>
          <span>Closed</span>
        </div>
        <div className="flex justify-between text-[#000101]">
          <span className="font-bold">SUNDAY</span>
          <span>Closed</span>
        </div>
      </div>
    </div>
  );
};

export default BusinessHoursSection;
