import React, { useState } from "react";
import { ReactComponent as LOGO } from "../assets/LOGO.svg";
import { HiMenuAlt2 } from "react-icons/hi";
import { ReactComponent as LogoMobile } from "../assets/logo mobile.svg";

const NavBar = () => {
  const [color, setColor] = useState("notActive");
  function changeColor() {
    if (window.scrollY >= 100) {
      setColor("active");
    } else {
      setColor("notActive");
    }
  }
  const [logo, setLogo] = useState(false);
  function changeLogo() {
    if (window.scrollY >= 100) {
      setLogo(true);
    } else {
      setLogo(false);
    }
  }

  window.addEventListener("scroll", changeColor);
  window.addEventListener("scroll", changeLogo);
  return (
    <div className={"fixed top-0 left-0 w-screen " + color}>
      <div className="grid grid-cols-2 px-5 py-5">
        {logo ? (
          <LogoMobile className="lg:place-self-center lg:ml-[-340px] cursor-pointer hover:opacity-40 transition-all duration-700" />
        ) : (
          <LOGO className="lg:place-self-center lg:ml-[-340px] cursor-pointer hover:opacity-40 transition-all duration-700" />
        )}
        {logo ? (
          <>
            <HiMenuAlt2
              size={30}
              color="#234E8F"
              className="lg:hidden place-self-end cursor-pointer"
            />
          </>
        ) : (
          <>
            <HiMenuAlt2
              size={30}
              color="white"
              className="lg:hidden place-self-end cursor-pointer"
            />
          </>
        )}

        <ul className="hidden lg:flex text-white font-medium gap-[32px] text-[16px] items-center px-5">
          {logo ? (
            <>
              <li className="text-[#234E8F] cursor-pointer">Home</li>
              <li className="text-[#234E8F] cursor-pointer">About</li>
              <li className="text-[#234E8F] cursor-pointer">Services</li>
              <li className="text-[#234E8F] cursor-pointer">Insights</li>
            </>
          ) : (
            <>
              <li className="text-white cursor-pointer hover:text-[#234E8F]">Home</li>
              <li className="text-white cursor-pointer hover:text-[#234E8F]">About</li>
              <li className="text-white cursor-pointer hover:text-[#234E8F]">Services</li>
              <li className="text-white cursor-pointer hover:text-[#234E8F]">Insights</li>
            </>
          )}

          <li className="bg-[#66ECBC] text-[#234E8F] h-[48px] flex items-center justify-center w-[137px] rounded-md cursor-pointer hover:bg-[#234E8F] hover:text-[#66ECBC] transition-all duration-700">
            Contact us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
