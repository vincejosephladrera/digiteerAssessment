import React from "react";
import HeroImage from "../assets/HeroImage.jpg";

const HeroSection = () => {
  return (
    <div className="bg-[#234E8F] grid grid-cols-1 lg:grid-cols-2">
      <div className="object-cover lg:hidden">
        <img src={HeroImage} alt="" className="w-[100%]" />
      </div>
      <div className="flex justify-center items-start flex-col gap-[24px] py-10 px-5 mx-auto">
        <h1 className="text-[24px] text-white font-bold lg:text-[32px] lg:max-w-[380px]">
          Harness the power of employee benefits for your company
        </h1>
        <h2 className="text-[16px] text-white font-light lg:max-w-[475px]">
          Bnfts is your expert partner in developing employee benefits strategies that effectively
          maximize employee engagement and satisfaction.
        </h2>
        <h2 className="text-[16px] text-[#234E8F] bg-[#66ECBC] w-[156px] h-[48px] flex justify-center items-center rounded-md">
          Discover How
        </h2>
      </div>
      <div className="object-cover hidden lg:block">
        <img src={HeroImage} alt="" className="w-[100%]" />
      </div>
    </div>
  );
};

export default HeroSection;
