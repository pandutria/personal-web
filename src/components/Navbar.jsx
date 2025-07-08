import React from "react";
import logo from "../../public/icon/logo.svg";
import circlelogo from "../../public/icon/circle-logo.svg";

const Navbar = () => {
  return (
    <div className="fixed z-99 flex flex-row w-full justify-between px-5 h-[11vh] items-center bg-bg-secondary">
      <div className="flex flex-row items-center gap-3">
        <img src={circlelogo} className='w-11 h-auto object-contain' alt="" />
        <div className="flex flex-col ">
          <h1 className="font-poppins font-bold text-[14px] text-linear-text">Pandu</h1>
          <h1 className="font-poppins font-bold text-[14px] text-linear-text -mt-1">Tria Adyatama</h1>
        </div>
      </div>
      <div className="flex flex-row gap-8 justify-center items-center">
        <a href="" className="font-poppins font-semibold text-[14px] text-third">Home</a>
        <a href="" className="font-poppins font-regular text-[14px] text-third">About</a>
        <a href="" className="font-poppins font-regular text-[14px] text-third">Projects</a>
        <a href="" className="font-poppins font-regular text-[14px] text-third">Achievements</a>
        <a href="" className="font-poppins font-regular text-[14px] text-third">Experiences</a>
        <a href="" className="font-poppins font-regular text-[14px] text-third">Contact</a>
      </div>
      <a href="" className="font-poppins font-medium text-[13px] px-5 py-2.5 bg-linear-third text-white rounded-full">Let’s Collaborate</a>
    </div>
  );
};

export default Navbar;
