import React from "react";
import { works } from "../../db";

const WorkCards = () => {
  return (
    <div className="w-full flex xl:justify-center gap-4 py-6 overflow-x-auto">
      {works.map((work) => (
        <div
          className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-[419.73px] sm:h-[350px] md:h-[400px] relative bg-work rounded-md"
          key={work.id}
          style={{
            backgroundImage: work.bg,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            className="absolute top-[45%] -right-6 z-10 w-9 max-h-[60%] object-contain"
            src={work.img}
            alt={work.img}
          />
          <div className="bg-white rounded-lg absolute bottom-3 w-11/12 left-1/2 -translate-x-1/2"
          style={{
              width: "90%",
              minHeight: "80px",
              maxWidth: "95%",
              height: "45%",
            }}>
            <div className="text-[#000101] text-center py-4 px-4 space-y-4">
              <h4 className="text-base md:text-sm font-bold">{work.title}</h4>
              <p className="text-base md:text-sm 2xl:text-base">{work.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkCards;
