import React from "react";
import ImgFive2x from "../assets/image 5@2x.png";
import ImgSix2x from "../assets/image 6@2x.png";
import ImgSeven2x from "../assets/image 7@2x.png";
import ImgEight2x from "../assets/image 8@2x.png";
import ImgNine2x from "../assets/image 9@2x.png";
import { motion } from "framer-motion";

const Partners = () => {
  return (
    <motion.div
      className="flex flex-col items-center gap-5 py-10 px-5"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{ duration: 3 }}
      initial="hidden"
      whileInView="visible"
    >
      <h1 className="font-bold text-center text-[24px]">Proud partners of</h1>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 place-content-center lg:grid-cols-5">
        <img src={ImgFive2x} alt="" srcset="" className="w-[155px] h-[24px] place-self-center" />
        <img src={ImgSix2x} alt="" srcset="" className="w-[155px] h-[39px] place-self-center" />
        <img
          src={ImgSeven2x}
          alt=""
          srcset=""
          className="w-[155px] h-[53px]  place-self-center lg:col-span-1"
        />
        <img src={ImgEight2x} alt="" srcset="" className="w-[135px] h-[53px] place-self-center" />
        <img
          src={ImgNine2x}
          alt=""
          srcset=""
          className="w-[180px] h-[25px] place-self-center md:col-span-2 lg:col-span-1"
        />
      </div>
    </motion.div>
  );
};

export default Partners;
