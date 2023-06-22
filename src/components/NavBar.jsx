import React from "react";
import { ReactComponent as LOGO } from "../assets/LOGO.svg";
import { HiMenuAlt2 } from "react-icons/hi";
import { ReactComponent as LogoMobile } from "../assets/logo mobile.svg";

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 w-screen">
      <div className="flex items-center  max-w-[1105px] mx-auto justify-between px-3 bg-white h-[50px]">
        <LogoMobile />
        <HiMenuAlt2 size={30} color="black" />
        <ul className="hidden md:flex text-white font-medium gap-[32px] text-[16px] items-center ">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Insights</li>
          <li className=" bg-[#66ECBC] text-[#234E8F] h-[48px] flex items-center justify-center w-[137px] rounded-md">
            Contact us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
