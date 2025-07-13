import React from 'react'
import { Feeds } from '../../db'

const DuringFeed = () => {
  return (
    <div className='w-full md:my-24'>
      <div className="w-11/12 md:w-8/12 md:h-8/12 mx-auto container">
      <div className="lg:w-[75%] mx-auto font-Inter text-[#000101] text-center space-y-1">
        <h1 className="text-[#013F1E] font-IBM font-bold text-[31px]  lg:text-5xl ">What We Do During FEED</h1>
        <div className="">
          <p className="md:text-[24px] font-Inter font-normal text-[#000101]">We take your goals and turn them into a full technical package  ready for execution.</p>
        </div>
      </div>

      {/* cards */}
      <div className="w-full mt-4 md:mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center md:gap-8 gap-4">
          {Feeds.map((Feed) => (
            <div className="bg-[#E6F3EC] md:bg-[#EEF4F0A3] rounded-md flex flex-col md:flex gap-2 justify-center items-center text-center w-full lg:h-[330px] font-Inter text-[#000101] py-8 px-2" key={Feed.id}>
              <div className="flex flex-col items-center gap-2">
                <img className="w-16" src={Feed.img} alt="feed-process" />
                <h3 className="font-IBM font-bold text-base md:text-xl tracking-wider">{Feed.title}</h3>
              </div>
              <p className="font-normal text-center text-sm md:text-base tect-[#010505]">{Feed.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default DuringFeed
