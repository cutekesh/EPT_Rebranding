import React from "react";
import { works } from "../../db";

const WorkCards = () => {
  return (
    <div className="">
      {/* mobile to lg view */}
      <div className="w-full flex  gap-4 py-6 overflow-x-auto">
      {works.map((work) => (
        <div className="xl:hidden flex-shrink-0 w-11/12 sm:w-1/2 md:w-1/3 lg:w-1/4 h-[419.73px] relative rounded-md"
          key={work.id}
          style={{
            backgroundImage: work.bg,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <img
            className="absolute top-[45%] -right-6 z-10 w-9 max-h-[60%] object-contain"
            src={work.img}
            alt={work.img}
          />
          <div className="bg-white rounded-lg absolute bottom-3 left-1/2 -translate-x-1/2"
          style={{
              width: "90%",
              minHeight: "80px",
              maxWidth: "95%",
              height: "45%",
            }}>
            <div className="text-[#000101] text-center py-4 px-4 space-y-4 font-Inter">
              <h4 className="text-base md:text-sm font-bold">{work.title}</h4>
              <p className="text-base tracking-tight md:text-sm 2xl:text-base">{work.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Desktop view for xl and 2xl */}
    <div className="hidden w-full xl:flex gap-4 py-8">
      {works.map((work) => (
        <div className="w-full h-[419.73px] relative rounded-md"
          key={work.id}
          style={{
            backgroundImage: work.bg,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <img
            className="absolute top-[45%] -right-6 z-10 w-9 max-h-[60%] object-contain"
            src={work.img}
            alt={work.img}
          />
          <div className="bg-white rounded-lg absolute bottom-3 left-1/2 -translate-x-1/2"
          style={{
              width: "90%",
              minHeight: "80px",
              maxWidth: "95%",
              height: "45%",
            }}>
            <div className="text-[#000101] text-center py-4 px-4 space-y-4 font-Inter">
              <h4 className="text-xl font-bold">{work.title}</h4>
              <p className="text-base">{work.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default WorkCards;
