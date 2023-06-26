import React from "react";
import { ReactComponent as FooterLogo } from "../assets/footerlogo.svg";
import FacebookLogo from "../assets/Vector.png";
import InstagramLogo from "../assets/ant-design_instagram-filled.png";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.div
      className="flex flex-col lg:flex-row max-w-[1084px] mx-auto  py-10 px-5 gap-10"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{ duration: 3 }}
      initial="hidden"
      whileInView="visible"
    >
      <div className="flex flex-col gap-4 items-start">
        <FooterLogo />
        <h2 className="text-[16px] lg:flex-initial lg:w-[250px]">
          Unit 305A Bonaventure Plaza, Corner Ortigas-Connecticut Avenues, Greenhills, San Juan,
          Philippines 1500
        </h2>
        <div className="flex gap-2">
          <img src={FacebookLogo} alt="" srcset="" />
          <img src={InstagramLogo} alt="" srcset="" />
        </div>
      </div>
      <div className="hidden lg:block place-self-center mb-auto">
        <h1 className="text-[#234E8F] font-semibold lg:text-[18px]">Our Services</h1>
        <h2 className="font-light text-[#234E8F] lg:text-[14px]">Employee Benefits</h2>
        <h2 className="font-light text-[#234E8F] lg:text-[14px]">Risk Management</h2>
        <h2 className="font-light text-[#234E8F] lg:text-[14px]">Insurance</h2>
      </div>
      <div className="hidden lg:flex lg:flex-col gap-5">
        <div>
          <h1 className="text-[#234E8F] font-semibold lg:text-[18px]">Our Partners</h1>
          <h2 className="font-light text-[#234E8F] lg:text-[14px]">Gallagher</h2>
          <h2 className="font-light text-[#234E8F] lg:text-[14px]">ERM</h2>
          <h2 className="font-light text-[#234E8F] lg:text-[14px]">Gallagher Communication</h2>
        </div>
        <div>
          <h1 className="text-[#234E8F] font-semibold lg:text-[18px]">Quick Links</h1>
          <h2 className="font-light text-[#234E8F] lg:text-[14px]">About</h2>
          <h2 className="font-light text-[#234E8F] lg:text-[14px]">Contact</h2>
          <h2 className="font-light text-[#234E8F] lg:text-[14px]">Insights</h2>
        </div>
      </div>
      <div className="lg:place-self-center">
        <h1 className="text-[#234E8F] font-semibold lg:text-[18px] mb-3">
          Sign up to our newsletter!
        </h1>
        <form action="" className="grid grid-cols-1 gap-3">
          <div className="grid grid-cols-1">
            <label htmlFor="first-name">First Name *</label>
            <input
              type="text"
              placeholder="e.g.Juan"
              className="border-solid border-[#DCDCDC] border-2 lg:w-[345px] h-[41px] p-5"
            />
          </div>
          <div className="grid grid-cols-1">
            <label htmlFor="last-name">Last Name *</label>
            <input
              type="text"
              placeholder="e.g. Dela Cruz"
              className="border-solid border-[#DCDCDC] border-2 lg:w-[345px] h-[41px] p-5"
            />
          </div>
          <div className="grid grid-cols-1">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              placeholder="e.g. j_delacruz@email.com"
              className="border-solid border-[#DCDCDC] border-2 lg:w-[345px] h-[41px] p-5"
            />
          </div>

          <button
            type="submit"
            className="bg-[#66ECBC]  place-self-stretch lg:max-w-[345px] h-[48px]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Footer;
