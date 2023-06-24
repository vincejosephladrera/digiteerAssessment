import React, { useState } from "react";
import { ReactComponent as LOGO } from "../assets/LOGO.svg";
import { HiMenuAlt2 } from "react-icons/hi";
import { ReactComponent as LogoMobile } from "../assets/logo mobile.svg";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

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

  const [nav, setNav] = useState(false);

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
              onClick={() => {
                setNav(!nav);
              }}
            />
          </>
        ) : (
          <>
            <HiMenuAlt2
              size={30}
              color="white"
              className="lg:hidden place-self-end cursor-pointer"
              onClick={() => {
                setNav(!nav);
              }}
            />
          </>
        )}

        <ul className="hidden lg:flex text-white font-medium gap-[32px] text-[16px] items-center px-5">
          {logo ? (
            <>
              <Link to="/" className="text-[#234E8F] cursor-pointer">
                Home
              </Link>
              <li className="text-[#234E8F] cursor-pointer">About</li>
              <li className="text-[#234E8F] cursor-pointer">Services</li>
              <li className="text-[#234E8F] cursor-pointer">Insights</li>]
            </>
          ) : (
            <>
              <Link to="/" className="text-white cursor-pointer hover:text-[#234E8F]">
                Home
              </Link>
              <li className="text-white cursor-pointer hover:text-[#234E8F]">About</li>
              <li className="text-white cursor-pointer hover:text-[#234E8F]">Services</li>
              <li className="text-white cursor-pointer hover:text-[#234E8F]">Insights</li>
            </>
          )}
          <Link
            to="/contact"
            className="bg-[#66ECBC] text-[#234E8F] h-[48px] flex items-center justify-center w-[137px] rounded-md cursor-pointer hover:bg-[#234E8F] hover:text-[#66ECBC] transition-all duration-700"
          >
            Contact us
          </Link>
        </ul>
      </div>
      <div
        className={
          "fixed top-0 left-0 p-5 grid grid-cols-2 transition-all duration-200 " +
          (nav ? "translate-x-[0%]" : "translate-x-[-100%]")
        }
        id="c-bar"
      >
        <ul className="flex flex-col gap-4 mx-auto pt-10">
          <li className="text-[#234E8F] font-bold">MENU</li>
          <Link to="/" className="text-[#234E8F]">
            Home
          </Link>
          <li className="text-[#234E8F]">About</li>
          <li className="text-[#234E8F]">Services</li>
          <li className="text-[#234E8F]">Insights</li>
          <Link to="/contact" className="text-[#234E8F] cursor-pointer">
            Contact Us
          </Link>
        </ul>
        <AiOutlineCloseCircle
          className="ml-auto cursor-pointer mx-auto"
          size={30}
          color="#234E8F"
          onClick={() => {
            setNav(!nav);
          }}
        />
      </div>
    </div>
  );
};

export default NavBar;
