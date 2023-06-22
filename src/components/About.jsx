import React from "react";
import ImageFive from "../assets/img5.png";
import ImageSix from "../assets/img6.png";
import ImageSeven from "../assets/img7.png";
import { ReactComponent as Group23 } from "../assets/Group 23.svg";
import { ReactComponent as Group24 } from "../assets/Group 24.svg";
import { ReactComponent as Group25 } from "../assets/Group 25.svg";
import ImageFour from "../assets/image 4.png";
import Gallagher from "../assets/image 2.png";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen px-3 py-10 gap-10">
      <div className="flex flex-col  gap-4">
        <h1 className="font-bold text-[24px]">
          One of the country's leading brokers for 20+ years
        </h1>
        <h2 className="text-[16px]">
          Helping companies maximize their investments in Benefits, Insurance, Risk Management and
          Communications since 2000.
        </h2>
        <div className="flex gap-4 overflow-auto">
          <div className="h-[250px] w-[215px] bg-[#F0F7FF] rounded-md flex-shrink-0 pr-4 flex flex-col justify-between px-5 pt-5">
            <h2>
              <strong>160,000+ employees</strong> served
            </h2>
            <Group23 className="ml-auto" />
          </div>
          <div className="h-[250px] w-[215px] bg-[#F0F7FF] rounded-md flex-shrink-0 flex flex-col justify-between  pt-5">
            <h2 className="px-5">
              Offices in all <strong>CBD / nationwide</strong>
            </h2>
            <Group24 className="ml-auto" />
          </div>
          <div className="h-[250px] w-[215px] bg-[#F0F7FF] rounded-md flex-shrink-0 flex flex-col justify-between pt-5 overflow-hidden">
            <h2 className="px-5">
              Personal involvement in <strong>PHP 5B Client Claims</strong>
            </h2>
            <Group25 className="ml-auto mt-[-20px] mr-[-10px]" />
          </div>
          <div className="h-[250px] w-[215px] bg-[#F0F7FF] rounded-md flex-shrink-0 flex flex-col gap-4 px-5 pt-5">
            <h2>
              Only broker with own <strong>Enterprise Risk Management Consulting Firm</strong>
            </h2>
            <img src={ImageFour} alt="" />
          </div>
          <div className="h-[250px] w-[215px] bg-[#F0F7FF] rounded-md flex-shrink-0 flex flex-col gap-4 px-5 pt-5">
            <h2>
              Partner of <strong>Gallagher</strong> - a global leader in insurance brokerage and
              consulting
            </h2>
            <img src={Gallagher} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <img src={ImageFive} alt="" />
        <div>
          <h1 className="font-bold text-[18px] mb-4">People at the center of our work</h1>
          <h2 className="text-[16px]">
            Your people are your assets and our primary concern. We take our assessment of your
            people's needs seriously and make sure that we address those needs at every stage of the
            strategy development and implementation.
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <img src={ImageSix} alt="" />
        <div>
          <h1 className="font-bold text-[18px] mb-4">Your business goals drive us forward</h1>
          <h2 className="text-[16px]">
            At Bnfts, we don’t stop when our tasks are competed or when the day is over. We continue
            to move forward until all your business goals are met.
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <img src={ImageSeven} alt="" />
        <div>
          <h1 className="font-bold text-[18px] mb-4">100% Client Commitment</h1>
          <h2 className="text-[16px]">
            The times may be modern but we stay true to our decades old client-first brand of
            servicing. We are committed to our client 100% no matter the situation. Using our expert
            network, we believe we can face any challenge and succeed.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
