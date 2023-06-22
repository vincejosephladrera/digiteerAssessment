import React from "react";
import HeroImage from "../assets/HeroImage.jpg";

const HeroSection = () => {
  return (
    <div className="bg-[#234E8F] grid grid-cols-1">
      <div className="object-cover">
        <img src={HeroImage} alt="" className="w-[100%] mobile-hero-image" />
      </div>
      <div className="flex justify-center items-start flex-col gap-[24px] py-10 px-5">
        <h1 className="text-[24px] text-white font-bold">
          Harness the power of employee benefits for your company
        </h1>
        <h2 className="text-[16px] text-white">
          Bnfts is your expert partner in developing employee benefits strategies that effectively
          maximize employee engagement and satisfaction.
        </h2>
        <h2 className="text-[16px] text-[#234E8F] bg-[#66ECBC] w-[156px] h-[48px] flex justify-center items-center rounded-md">
          Discover How
        </h2>
      </div>
      <div className="object-cover hidden">
        <img src={HeroImage} alt="" className="w-[100%]" />
      </div>
    </div>
  );
};

export default HeroSection;
