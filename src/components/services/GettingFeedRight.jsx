import React from 'react'

const GettingFeedRight = () => {
  const Impact = [
    {
      id: 1,
      title: "Faster project delivery",
      rate: "25%",
      img: "/src/assets/famicons_time-outline.png"
    },
    {
      id: 2,
      title: "Reduction in rework costs",
      rate: "15%",
      img: "/src/assets/timer.png"
    },
    {
      id: 3,
      title: "Client approval rate pre- EPC",
      rate: "98%",
      img: "/src/assets/timer.png"
    }
  ]

  return (
    <div className=" mt-4 mb-12 md:mt-16">
      <div className='w-11/12 mx-auto container'>
        <div className="font-Inter text-[#000101] text-center flex flex-col md:flex-col-reverse gap-2">
          <p className="font-medium text-sm md:text-base">Every great build starts with a great plan</p>
          <h1 className="text-[#013F1E] text-xl md:text-3xl font-IBM font-bold">The Impact of Getting FEED Right</h1>
        </div>

        {/* Desktop view */}
        <div className="hidden md:grid grid-cols-3 gap-4 mt-10">
          {Impact.map((impact) => (
          <div className="border border-[#B6B6B6] rounded-lg py-6 px-4 text-[#000101] font-Inter text-center" key={impact.id}>
            <div className="flex flex-col items-center gap-2">
              <img className="w-22" src={impact.img} alt={impact.title}/>
              <div className="font-IBM font-bold text-3xl">{impact.rate}</div>
            </div>
            <p className="text-sm mt-2">{impact.title}</p>
          </div>
          ))}
        </div>

        {/* Carousel for mobile view */}
        <div className="md:hidden flex gap-2 mt-6 overflow-x-auto scrollbar-hide">
          {Impact.map((impact) => (
          <div className="w-11/12 bg-[#E6F3EC] rounded-md py-6 px-4 text-[#000101] font-Inter text-center flex-shrink-0" key={impact.id}>
            <div className="flex flex-col items-center gap-2">
              <img className="w-20" src={impact.img} alt={impact.title}/>
              <div className="font-IBM font-bold text-3xl">{impact.rate}</div>
            </div>
            <p className="text-sm mt-2">{impact.title}</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GettingFeedRight

