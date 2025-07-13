import React from 'react'
import TestimonialCards from '../../../../components/reuseable/TestimonialCards'

const Testimonials = () => {
  return (
    <div className="bg-white lg:mt-15">
      <div className="w-11/12 mx-auto container py-10"> 
        <div className="w-full space-y-2 text-center">
          <p className="text-[#000000] md:text-[27.43px] font-[400] font-Inter text-[14.75px]">OUR WORK IN THEIR WORDS</p>
          <h2 className="xl:text-[54.85px] md:text-5xl font-[700] font-IBM text-[25.49px] text-[#013F1E]">Client Testimonials</h2>
        </div>
        <div className='w-full overflow-x-auto'>
          <TestimonialCards/>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
