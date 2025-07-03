import React from "react";
import { Link } from "react-router-dom";

const EPTAdvantage = () => {
  return (
    <div className="">
      <p className="text-white">WHY CHOOSE US</p>
      <h2>The EPT Advantage</h2>
      <div className="">
        <div className="">
          <h3 className="">We Plan & Design</h3>
          <p className="">Smart blueprints for oil, gas, and power systems.</p>
          <Link className="">
            Learn More <img src="" alt="" />
          </Link>
        </div>
        <div className="">
          <h3 className="">We Build & Deliver</h3>
          <p className="">
            From foundation to finish, we build safely and fast
          </p>
          <Link className="">
            Learn More <img src="" alt="" />
          </Link>
        </div>
        <div className="">
          <h3 className="">We Equip & Support</h3>
          <p className="">
            Rent or buy equipment, get project support no delays
          </p>
          <Link className="">
            Learn More <img src="" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EPTAdvantage;
