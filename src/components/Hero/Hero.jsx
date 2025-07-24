import React, { useState, useEffect } from "react";
import heroImg1 from "../../assets/hero 1.png";
import heroImg2 from "../../assets/hero 2.png";
import heroImg3 from "../../assets/hero 3.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const heroTitleDesktop = [
    ["Powering Nigeria's", "Energy Future."],
    ["Heavy-Duty Equipment.", "Zero Downtime."],
    ["Deploy Fast.", "Produce Early."],
  ];

  const heroTextDesktop = [
    "From concept to commissioning, we handle every stage with precision, delivering seamless systems across power, gas, and infrastructure, built for tomorrow.",
    "From cranes to suppressors, we supply, rent, and maintain proven machines, trusted across oilfields and high-impact energy sites, to keep you moving.",
    "Our EPFs and testing units speed up asset monetization, with modular deployment and real-time field data, for smarter outcomes.",
  ];

  const heroTitleMobile = heroTitleDesktop[0].join("<br />");
  const heroTextMobile =
    "From concept to commissioning, we deliver turnkey energy solutions built for tomorrow";

  const images = [
    {
      url: heroImg1,
      titleLines: heroTitleDesktop[0],
      text2: heroTextDesktop[0],
    },
    {
      url: heroImg2,
      titleLines: heroTitleDesktop[1],
      text2: heroTextDesktop[1],
    },
    {
      url: heroImg3,
      titleLines: heroTitleDesktop[2],
      text2: heroTextDesktop[2],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect for desktop hero
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <main className="">
        {/* Desktop Hero Section */}
        <div className=" relative overflow-hidden hidden md:block md:h-[500px] xl:h-[650px]">
          {/* Background Images */}
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 w-full ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `linear-gradient(to right, #012511, #09291AB2, #F6C2004D), url(${image.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          ))}

          {/* Overlay Content */}
          <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-start text-white mx-auto w-11/12 container">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl /* Fluid responsive font sizing */
                       font-bold mb-4 md:leading-tight font-IBM-Plex
                       max-w-[90%] md:max-w-[70%]"
            >
              <span className="block whitespace-nowrap">
                {images[currentIndex].titleLines[0]}
              </span>
              <span className="block whitespace-nowrap">
                {images[currentIndex].titleLines[1]}
              </span>
            </h1>
            <p
              className="font-Inter font-medium
                        text-base sm:text-lg md:text-xl lg:text-2xl 
                        leading-relaxed max-w-[90%] md:max-w-[50%] mt-4
                        line-clamp-3"
            >
              {images[currentIndex].text2}
            </p>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              {/* Explore Services Button */}
              <Link to="/services/engineering/front-end">
                <button
                  className="group relative inline-flex items-center
                         bg-[#F6C200] text-black py-3 px-6 rounded-lg
                         transition-all duration-300 ease-in-out
                         overflow-hidden
                         hover:pr-[calc(1.5rem + 3px)]"
                >
                  <span className="relative z-10 font-Inter font-medium text-lg sm:text-xl md:text-2xl lg:text-[27.43px]">
                    Explore Services
                  </span>
                  <span
                    className="flex items-center justify-center
                         w-0 opacity-0 group-hover:w-[1.5rem] group-hover:opacity-100
                         transition-all duration-300 ease-in-out"
                  >
                    <span className="text-xl ml-2">→</span>
                  </span>
                </button>
              </Link>
              {/* Book a Consultation Button */}
              <Link to="/services/engineering/front-end">
                <button
                  className="group relative inline-flex items-center
                           bg-transparent text-[#FEFFFF] border-2 border-[#FEFFFF] py-3 px-6 rounded-lg
                           transition-all duration-300 ease-in-out
                           overflow-hidden
                           hover:text-white
                           hover:pr-[calc(1.5rem + 3px)]"
                >
                  <span className="relative z-10 font-Inter font-medium text-lg sm:text-xl md:text-2xl lg:text-[27.43px]">
                    Book a Consultation
                  </span>
                  <span
                    className="flex items-center justify-center
                           w-0 opacity-0 group-hover:w-[1.5rem] group-hover:opacity-100
                           transition-all duration-300 ease-in-out"
                  >
                    <span className="text-xl ml-2">→</span>
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#F6C200] w-7 h-2"
                    : "bg-white w-2 h-2"
                }`}
              ></div>
            ))}
          </div>
        </div>

        <div className="relative w-full h-[60vh] xs:h-[65vh] sm:h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden md:hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to bottom, #012511, #09291AB2, #F6C2004D), url(${images[0].url})`,
            }}
          ></div>

          <div className="relative z-10 text-white px-4 py-8 flex flex-col items-center justify-center">
            {/* Hero Title for Mobile */}
            <h1
              className="text-3xl  xs:text-2xl sm:text-3xl  font-bold mb-4 leading-tight font-Inter"
              dangerouslySetInnerHTML={{ __html: heroTitleMobile }}
            ></h1>
            {/* Hero Text for Mobile  */}
            <p className="font-Inter font-medium text-lg  xs:text-sm sm:text-base leading-relaxed max-w-xs mb-8">
              {heroTextMobile}
            </p>
            {/* Explore Services Button for Mobile */}
            <Link to="/services/engineering/front-end">
              <button
                className="group relative inline-flex items-center justify-center
                       bg-[#F6C200] text-black
                       py-2 px-3 
                       xs:py-2 xs:px-4 
                       sm:py-3 sm:px-6 
                       rounded-lg
                       text-sm 
                       xs:text-sm sm:text-base 
                       font-semibold shadow-lg
                       transition-all duration-300 ease-in-out
                       overflow-hidden
                       w-auto mx-auto 
                       
                       hover:pr-[calc(0.75rem + 3px)] 
                       xs:hover:pr-[calc(1rem + 3px)] 
                       sm:hover:pr-[calc(1.5rem + 3px)]"
              >
                <span className="relative z-10 font-Inter font-medium text-lg  xs:text-sm sm:text-base">
                  Explore Services
                </span>
                <span
                  className="flex items-center justify-center
                         w-0 opacity-0
                         group-hover:w-[1.2rem] 
                         xs:group-hover:w-[1.2rem] 
                         sm:group-hover:w-[1.5rem] 
                         group-hover:opacity-100
                         transition-all duration-300 ease-in-out"
                >
                  <span className="text-lg ml-1">→</span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
