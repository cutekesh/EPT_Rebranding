import React from "react";
import simplicity from "../../../assets/Spiral.png";
import partnership from "../../../assets/UsersThree.png";
import results from "../../../assets/ListChecks.png";
import sustainability from "../../../assets/Plant.png";

const Covenant = () => {
  const values = [
    {
      id: 1,
      image: simplicity,
      title: "Simplicity",
      description: "By always defining \nWho, What, Where, Why, When.",
    },
    {
      id: 2,
      image: partnership,
      title: "Partnership",
      description:
        "With deeply rooted Respect, Trust and \nAccountability toward our customers, \nemployees and business for common good.",
    },
    {
      id: 3,
      image: results,
      title: "Results",
      description:
        "Through agility, excellence, innovation, \nlearning transfer and applied thinking.",
    },
    {
      id: 4,
      image: sustainability,
      title: "Sustainability",
      description:
        "Through inclusive consideration for people, \nenvironment, community, and economic \nprogress.",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:gap-8 md:py-[80px] py-12 md:py-16 px-4 md:px-8 bg-white">
      <h2 className="hidden md:block text-[#333333] font-[700] font-IBM-Plex-Sans text-[54.85px]">
        Covenant & Values
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[60px] w-full max-w-6xl">
        {values.map((value) => (
          <fieldset
            className="border border-[#666666] rounded-[14.99px] md:w-[443px] md:pb-8 px-4 py-6 text-center bg-[#F9FFFC]"
            key={value.id}
          >
            <legend className="flex items-center justify-center mb-2 w-24 h-24 rounded-full">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#F6C200]">
                <img src={value.image} alt="" className="w-13 h-13" />
              </div>
            </legend>
            <h3 className="text-[#000101] text-[26.98px] md:text-[36px] sm:text-2xl font-[700] font-IBM-Plex-Sans">
              {value.title}
            </h3>
            <p className="text-[#000101] text-[13.99px] md:text-[16px] font-Inter font-400 mt-2">
              {value.description.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < value.description.split("\n").length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </fieldset>
        ))}
      </div>
    </div>
  );
};

export default Covenant;
