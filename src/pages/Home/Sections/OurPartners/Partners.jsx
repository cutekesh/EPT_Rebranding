import React from 'react'
import Image from "../../../../assets/nnpc.png"
import Image2 from "../../../../assets/shell.png"
import Image3 from "../../../../assets/total energy.png"
import Image4 from "../../../../assets/chevron.png"
import Image5 from "../../../../assets/seplat.png"
import Image6 from "../../../../assets/Arc energy.png"
import Image7 from "../../../../assets/heirs oil & gas.png"
import Image8 from "../../../../assets/dover.png"
import Image9 from "../../../../assets/mobil.png"


const Partners = () => {
  return (
    <div className="bg-white">
      <div className="w-11/12 mx-auto py-10 space-y-3">
        <div className='w-full xl:w-10/12 mx-auto'>
          <h2 className="text-[#008A3F] text-center text-lg md:text-4xl font-bold">Our Partners</h2>
        <marquee behavior="scroll" direction="left">
          <div className="hidden md:flex w-full justify-between gap-10 p-2">
            <img src={Image} alt="partners-logo"/>
            <img src={Image2} alt="partners-logo"/>
            <img src={Image3} alt="partners-logo"/>
            <img src={Image4} alt="partners-logo"/>
            <img src={Image5} alt="partners-logo"/>
            <img src={Image6} alt="partners-logo"/>
            <img src={Image7} alt="partners-logo"/>
            <img src={Image8} alt="partners-logo"/>
            <img src={Image9} alt="partners-logo"/>
          </div>
        </marquee>
        </div>


        {/* mobile view */}
        <div className="w-full grid grid-cols-6 md:hidden items-center gap-4 p-2">
          <img src={Image} alt="partners-logo"/>
          <img src={Image2} alt="partners-logo"/>
          <img src={Image3} alt="partners-logo"/>
          <img src={Image4} alt="partners-logo"/>
          <img src={Image5} alt="partners-logo"/>
          <img src={Image6} alt="partners-logo"/>
          <div className="col-span-3 ml-16 flex justify-items-center gap-4">
            <img src={Image7} alt="partners-logo"/>
            <img src={Image8} alt="partners-logo"/>
            <img src={Image9} alt="partners-logo"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners
