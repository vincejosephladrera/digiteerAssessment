import React from "react";
import { ReactComponent as FooterLogo } from "../assets/footerlogo.svg";
import FacebookLogo from "../assets/Vector.png";
import InstagramLogo from "../assets/ant-design_instagram-filled.png";
const Footer = () => {
  return (
    <div className="grid grid-cols-1 max-w-[1084px] mx-auto lg:grid-cols-4 py-10 px-5">
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
      <div className="hidden lg:block place-self-center mb-auto">
        <h1 className="text-[#234E8F] font-semibold lg:text-[18px]">Our Partners</h1>
        <h2 className="font-light text-[#234E8F] lg:text-[14px]">Gallagher</h2>
        <h2 className="font-light text-[#234E8F] lg:text-[14px]">ERM</h2>
        <h2 className="font-light text-[#234E8F] lg:text-[14px]">Gallagher Communication</h2>
        <h1 className="text-[#234E8F] font-semibold lg:text-[18px]">Quick Links</h1>
        <h2 className="font-light text-[#234E8F] lg:text-[14px]">About</h2>
        <h2 className="font-light text-[#234E8F] lg:text-[14px]">Contact</h2>
        <h2 className="font-light text-[#234E8F] lg:text-[14px]">Insights</h2>
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
              placeholder="eg.Juan"
              className="border-solid border-[#DCDCDC] border-2 lg:w-[100%] h-[41px] p-5"
            />
          </div>
          <div className="grid grid-cols-1">
            <label htmlFor="last-name">Last Name *</label>
            <input
              type="text"
              placeholder="eg. Dela Cruz"
              className="border-solid border-[#DCDCDC] border-2 lg:w-[100%] h-[41px] p-5"
            />
          </div>
          <div className="grid grid-cols-1">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              placeholder="eg. Dela Cruz"
              className="border-solid border-[#DCDCDC] border-2 lg:w-[100%] h-[41px] p-5"
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
    </div>
  );
};

export default Footer;
