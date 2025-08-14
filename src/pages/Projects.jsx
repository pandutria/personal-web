import React from "react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import test from "../../public/pic/test.png";
import github from "../../public/icon/github.png";
import { useState } from "react";
import ProjectData from "../data/ProjectData";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    document.title = "Pandu Tria Adyatama | Personal Website - Projects";
    setProjects(ProjectData);
  }, []);

  return (
    <div className="flex flex-col">
      <Navbar />
      <section className="flex w-full bg-bg-primary justify-center lg:pt-[11vh] md:pt-[10vh] pt-[10vh] lg:pb-[8vh] md:pb-[6vh] pb-[5vh]">
        <div className="container flex flex-col lg:w-290 md:w-full w-full lg:px-0 md:px-5 px-5 h-auto bg-bg-primary items-center">
          <h1 data-aos="fade-down" className="font-header font-normal text-linear-text lg:text-[90px] md:text-[90px] text-[65px]">
            PROJECTS
          </h1>
          <p data-aos="fade-down" className="font-poppins font-thin text-third lg:-mt-6 md:-mt-6 -mt-4 lg:text-[17px] md:text-[17px] text-[14px] lg:text-start md:text-center text-center">
            Turning coffee into{" "}
            <span className="text-secondary font-semibold">code</span>. Here's
            the <span className="text-secondary font-semibold">result</span>.
          </p>
          <div data-aos="zoom-in-up" className="flex flex-row flex-wrap lg:gap-y-7 md:gap-y-7 gap-y-6 lg:pt-15 md:pt-15 pt-9 w-full justify-between">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col lg:w-90 md:w-85 w-full bg-white rounded-[10px] overflow-hidden shadow-md hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2"
              >
                <img
                  src={project.image}
                  className="w-full h-auto object-contain"
                  alt=""
                />
                <div className="flex flex-col px-4 py-6 w-full">
                  <div className="flex flex-row justify-between items-center">
                    <h1 className="font-poppins font-semibold text-third text-[15px]">
                      {project.name}
                    </h1>
                    <a href={project.link}>
                      <img src={github} className="w-4.5" alt="" />
                    </a>
                  </div>
                  <div className="flex flex-row flex-wrap pt-4 gap-x-3 gap-y-2 w-full h-auto">
                    {project.stack.map((stack, indexs) => (
                      <p
                        key={indexs}
                        className="font-poppins font-normal text-third text-[12px] border-[1px] border-border px-3 py-1"
                      >
                        {stack}
                      </p>
                    ))}
                  </div>
                  {/* <p className='font-poppins font-normal text-third text-[12px] pt-4 text-justify leading-[180%]'>{project.description}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
