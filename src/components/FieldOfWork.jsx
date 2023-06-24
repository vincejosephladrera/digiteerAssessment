import React from "react";
import Group37 from "../assets/Group 37.png";
import Group38 from "../assets/Group 38.png";
import Group39 from "../assets/Group 39.png";

const FieldOfWork = () => {
  const services = [
    {
      id: 1,
      icon: Group37,
      name: "Employee Benefits",
      description:
        "Develop a strong Employee Benefits Plan that works for your business and business goals.",
      buttonLabel: "Work on Benefits",
    },
    {
      id: 2,
      icon: Group38,
      name: "Risk Analysis & Management",
      description:
        "Assess your areas of risk and defend your business from unforeseen circumstances that derail growth.",
      buttonLabel: "Work on Risk",
    },
    {
      id: 3,
      icon: Group39,
      name: "HR Outsourcing & Consultancy",
      description:
        "Protect what matters in the business. From people to property, there is an insurance that can safeguard you.",
      buttonLabel: "Work on Insurance",
    },
  ];
  return (
    <div className="bg-gradient-to-b from-[#F0F7FF] to-[#FFFFFF] py-10">
      <h1 className="text-center font-bold text-[24px] mb-5">Our field of work</h1>
      <div className="flex  px-5 gap-5 justify flex-wrap max-w-[1200px] mx-auto mb-10">
        {services.map((service) => {
          return (
            <div
              key={service.id}
              className="min-h-[296px] max-w-[345px] bg-white flex flex-col gap-5 mx-auto px-5 py-10 shadow-xl rounded-md"
            >
              <div className="flex items-center gap-4 rounded-md">
                <img src={service.icon} alt="" />
                <h1 className="text-[#234E8F] font-semibold">{service.name}</h1>
              </div>
              <h2>{service.description}</h2>
              <h2 className="bg-[#66ECBC] text-[#234E8F] font-medium flex flex-initial width-[305px] h-[48px] items-center justify-center rounded-md hover:bg-[#234E8F] hover:text-[#66ECBC] cursor-pointer transition-all duration-700">
                {service.buttonLabel}
              </h2>
            </div>
          );
        })}
      </div>
      <div>
        <div className="grid grid-cols-1 gap-5 bg-[#668CF2] max-w-[1105px] min-h-[296px] px-5 py-10 lg:py-0 lg:pr-0 rounded-lg mx-auto lg:grid-cols-2 lg:place-content-streetch">
          <div className="grid place-content-center">
            <h1 className="text-[24px] text-white font-bold">Ready to take advantage of Bnfts?</h1>
            <h2 className="text-white font-light">
              Schedule a free benefits consultation or risk audit with us and learn how you can
              improve your benefits strategy to increase employee engagement and benefits
              satisfaction.
            </h2>
          </div>
          <div className="flex justify-center items-center md:justify-start lg:justify-center forBackground lg:h-[100%]">
            <h2 className="text-[#234E8F] bg-[#66ECBC] h-[48px] w-[285px] grid place-content-center rounded-md">
              Schedule a Free audit
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldOfWork;
