import React from 'react'
import Image from "../../assets/our ceo.png"
import { execuctives } from '../../db'

const MeetThePeopleCard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 py-12 gap-10 2xl:gap-16">
        {execuctives.map((executive) => (
          <div className="relative" key={executive.id}>
                <img className="w-full" src={executive.image} alt="ceo-image"/>
                <div className="absolute w-11 h-11 lg:w-16 lg:h-16 xl:w-24 xl:h-24 2xl:w-33 2xl:h-33 bottom-13 right-2 bg-[#F6C200] rounded-full"></div>
                <div className="mt-2">
                  <h4 className="text-[#007A4D] text-lg font-bold">{executive.name}</h4>
                  <p className="text-[#333333] text-xs font-semibold">{executive.role}</p>
                </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MeetThePeopleCard
