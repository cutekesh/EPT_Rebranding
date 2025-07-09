import React from 'react'
import { Feeds } from '../../db'

const DuringFeed = () => {
  return (
    <div className="w-11/12 mx-auto mt-4 md:mt-16">
      <div className="font-Inter text-[#000101] text-center space-y-1">
        <h1 className="text-[#008A3F] font-IBM font-bold text-xl md:text-4xl">What We Do During FEED</h1>
        <p className="font-medium text-sm md:text-base">We take your goals and turn them into a full technical package  ready for execution.</p>
      </div>

      {/* cards */}
      <div className="w-full lg:w-8/12 mx-auto mt-4 md:mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4">
          {Feeds.map((Feed) => (
            <div className="bg-[#E6F3EC] rounded-md flex flex-col md:flex gap-2 items-center text-center w-full font-Inter text-[#000101] py-8 px-6" key={Feed.id}>
              <img className="w-18" src={Feed.img} alt="feed-process" />
              <h3 className="font-IBM font-bold text-base md:text-xl tracking-wider">{Feed.title}</h3>
              <p className="font-normal max-w-60 text-center text-sm md:text-base">{Feed.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DuringFeed
