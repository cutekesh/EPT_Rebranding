import React from 'react'
import MeetThePeopleCard from '../reuseable/MeetThePeopleCard'

const MeetThePeople = () => {
  return (
    <div className="w-11/12 mx-auto py-12">
      <div className="text-[#333333] text-4xl font-bold font-IBM flex flex-col gap-4 items-center">
        <h2 className="text-center">Meet The People Who</h2>
        <div className="bg-[#F6C200] px-4 py-2">Take Risks</div>
      </div>
      <MeetThePeopleCard/>
    </div>
  )
}

export default MeetThePeople
