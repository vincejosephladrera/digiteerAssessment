import React from "react";
import ImageFive from "../assets/img5.png";
import ImageSix from "../assets/img6.png";
import ImageSeven from "../assets/img7.png";
import { ReactComponent as Group23 } from "../assets/Group 23.svg";
import { ReactComponent as Group24 } from "../assets/Group 24.svg";
import { ReactComponent as Group25 } from "../assets/Group 25.svg";
import ImageFour from "../assets/image 4.png";
import Gallagher from "../assets/image 2.png";
import { ReactComponent as Group15 } from "../assets/Group 15.svg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className=" bg-white">
      <section
        className="mx-auto lg:max-w-[1269px] lg:rounded-[20px] bg-white lg:min-h-[533px] lg:relative lg:top-[-80px] lg:shadow-xl lg:pb-10"
        id="floatingBox"
      >
        <div className="flex">
          <div className="px-5 py-10 flex flex-col gap-[16px] lg:px-10">
            <h1 className="font-bold text-[24px] lg:text-[32px] lg:w-[535px]">
              One of the country's leading brokers for 20+ years
            </h1>
            <h2 className="text-[16px] lg:w-[535px] font-light">
              Helping companies maximize their investments in Benefits, Insurance, Risk Management
              and Communications since 2000.
            </h2>
          </div>
          <Group15 className="hidden lg:block ml-auto" />
        </div>
        <div className="flex overflow-auto gap-[24px] px-5">
          <div className="h-[250px] w-[215px] bg-[#F0F7FF] rounded-md flex-shrink-0 pr-4 flex flex-col justify-between px-5 pt-5">
            <h2 className="text-[16px] ">
              <strong>160,000+ employees</strong> served
            </h2>
            <Group23 className="ml-auto" />
          </div>
          <div className="h-[250px] w-[215px] bg-[#F0F7FF] rounded-md flex-shrink-0 flex flex-col justify-between  pt-5">
            <h2 className="px-5 text-[16px] ">
              Offices in all <strong>CBD / nationwide</strong>
            </h2>
            <Group24 className="ml-auto" />
          </div>
          <div className="h-[250px] w-[215px] bg-[#F0F7FF] rounded-md flex-shrink-0 flex flex-col justify-between pt-5 overflow-hidden">
            <h2 className="px-5 text-[16px]">
              Personal involvement in <strong>PHP 5B Client Claims</strong>
            </h2>
            <Group25 className="ml-auto mt-[-20px] mr-[-10px]" />
          </div>
          <div className="h-[250px] w-[215px] bg-[#F0F7FF] rounded-md flex-shrink-0 flex flex-col gap-4 px-5 pt-5">
            <h2 className="text-[16px] =">
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
      </section>
      <section className="px-3 flex flex-col gap-10 mt-10 lg:items-center pb-12">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 3 }}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col gap-2 lg:flex-row-reverse lg:items-center lg:gap-5 md:max-w-[720px] mx-auto lg:max-w-none"
        >
          <img src={ImageFive} alt="" className="flex-1 rounded-md lg:flex-initial lg:w-[535px]" />
          <div className="flex-1 lg:flex-initial lg:w-[535px]">
            <h1 className="font-bold text-[18px] mb-4 lg:text-[24px]">
              People at the center of our work
            </h1>
            <h2 className="text-[16px] font-light">
              Your people are your assets and our primary concern. We take our assessment of your
              people's needs seriously and make sure that we address those needs at every stage of
              the strategy development and implementation.
            </h2>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-5 md:max-w-[720px] mx-auto lg:max-w-none"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 3 }}
          initial="hidden"
          whileInView="visible"
        >
          <img src={ImageSix} alt="" className="flex-1 rounded-md lg:flex-initial lg:w-[535px]" />
          <div className="flex-1 lg:flex-initial lg:w-[535px]">
            <h1 className="font-bold text-[18px] mb-4 lg:text-[24px]">
              Your business goals drive us forward
            </h1>
            <h2 className="text-[16px] font-light">
              At Bnfts, we don’t stop when our tasks are competed or when the day is over. We
              continue to move forward until all your business goals are met.
            </h2>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col gap-2 lg:flex-row-reverse lg:items-center lg:gap-5 md:max-w-[720px] mx-auto lg:max-w-none"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 3 }}
          initial="hidden"
          whileInView="visible"
        >
          <img src={ImageSeven} alt="" className="flex-1 rounded-md lg:flex-initial lg:w-[535px]" />
          <div className="flex-1 lg:flex-initial lg:w-[535px]">
            <h1 className="font-bold text-[18px] mb-4 lg:text-[24px]">100% Client Commitment</h1>
            <h2 className="text-[16px] font-light">
              The times may be modern but we stay true to our decades old client-first brand of
              servicing. We are committed to our client 100% no matter the situation. Using our
              expert network, we believe we can face any challenge and succeed.
            </h2>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
