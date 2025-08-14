import React, { useState } from "react";
import logo from "../../public/icon/logo.svg";
import circlelogo from "../../public/icon/circle-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import burger from "../../public/icon/burger.png";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  return (
    <div>
      <section className="fixed z-99 flex w-full justify-center lg:h-[10vh] md:h-[8vh] h-[8vh] bg-bg-secondary">
        <div className="container flex flex-row lg:w-290 md:w-full w-full lg:px-0 md:px-5 px-5 justify-between items-center">
          <div className="flex flex-row items-center gap-3">
            <img
              src={circlelogo}
              className="lg:w-11 md:w-11 w-7 h-auto object-contain"
              alt=""
            />
            <h1 className="lg:hidden md:hidden flex font-poppins font-bold text-[15px] text-linear-text">Pandu Tria Adyatama</h1>
            <div className="lg:flex md:flex hidden flex-col">
              <h1 className="font-poppins font-bold text-[14px] text-linear-text">
                Pandu
              </h1>
              <h1 className="font-poppins font-bold text-[14px] text-linear-text -mt-1">
                Tria Adyatama
              </h1>
            </div>
          </div>
          <div className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0 md:translate-x-0 transition-transform duration-500 ease-in-out lg:relative md:absolute absolute lg:hidden md:flex flex lg:flex-row md:flex-col flex-col lg:h-auto md:h-screen h-screen lg:px-0 md:px-5 px-3 bg-bg-secondary gap-8 justify-center items-center right-0 top-0`}>
            <Link
              to="/"
              className={
                location.pathname == "/"
                  ? "font-poppins font-semibold text-[14px] text-third"
                  : "font-poppins font-regular text-[14px] text-third"
              }
            >
              Home
            </Link>
            {/* <Link to="/about" className={location.pathname == "/about" ? 'font-poppins font-semibold text-[14px] text-third' : 'font-poppins font-regular text-[14px] text-third'}>About</Link> */}
            <Link
              to="/projects"
              className={
                location.pathname == "/projects"
                  ? "font-poppins font-semibold text-[14px] text-third"
                  : "font-poppins font-regular text-[14px] text-third"
              }
            >
              Projects
            </Link>
            <Link
              to="/experiences"
              className={
                location.pathname == "/experiences"
                  ? "font-poppins font-semibold text-[14px] text-third"
                  : "font-poppins font-regular text-[14px] text-third"
              }
            >
              Experiences
            </Link>
            <Link
              to="/achievements"
              className={
                location.pathname == "/achievements"
                  ? "font-poppins font-semibold text-[14px] text-third"
                  : "font-poppins font-regular text-[14px] text-third"
              }
            >
              Achievements
            </Link>
            <Link
              to="/about"
              className={
                location.pathname == "/contact"
                  ? "font-poppins font-semibold text-[14px] text-third"
                  : "font-poppins font-regular text-[14px] text-third"
              }
            >
              Contact
            </Link>
              <a
            href=""
            className="font-poppins font-medium text-[13px] px-5 py-2.5 bg-linear-third text-white rounded-full"
          >
            Let’s Collaborate
          </a>
          </div>
          <img src={burger} onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'rotate-90' : 'rotate-0'} lg:hidden md:flex flex lg:w-5 md:w-6 w-5 h-auto cursor-pointer transition-transform duration-300 object-contain z-100`} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Navbar;
