import React from 'react'
import { works } from '../../db'

const WorkCards = () => {
  return (
    <div className="w-full flex gap-4 py-6 overflow-x-auto">
      {works.map((work) => (
        <div className="flex-shrink-0 w-72 sm:w-80 md:w-[293.84px] xl:w-[320px] 2xl:w-[425px] h-[350px] sm:h-[400px] md:h-[420.19px] relative bg-work rounded-md"
          key={work.id}
          style={{ backgroundImage: work.bg, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <img className="absolute top-[45%] md:top-1/2 -right-6 z-10 w-9 md:w-auto max-h-[60%] object-contain"
            src={work.img}
            alt={work.img}/>
          <div className="bg-white rounded-lg absolute bottom-3 w-11/12 left-1/2 -translate-x-1/2">
            <div className="text-[#000101] text-center py-4 px-2 sm:py-6 sm:px-4 space-y-2">
              <h4 className="text-base md:text-sm font-bold">{work.title}</h4>
              <p className="text-sm">{work.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkCards
