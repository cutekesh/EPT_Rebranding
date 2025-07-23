import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../assets/amico.png";

const Error = () => {
  return (
    
    <div className="flex flex-col items-center my-10 gap-10 p-8">
      <img
        src={notFound}
        alt={notFound}
        width={100}
        height={100}
        className="w-[500px] mx-auto"
      />
     
      <div className="bg-[#008A3F] text-white w-90 py-1 lg:w-120 text-center rounded-md lg:text-[23px] font-bold">
          <Link to="/">Go back home</Link>
      </div>
    </div>
  );
}


export default Error;
