import React from 'react'
import Navbar from '../components/Navbar'
import { useEffect } from 'react'
import test from '../../public/pic/test.png'
import github from '../../public/icon/github.png'
import { useState } from 'react'
import ProjectData from '../data/ProjectData'

const Projects = () => {
  const [projects, setProjects] = useState([])

    useEffect(() => {
        document.title = "Pandu Tria Adyatama | Personal Website - Projects";
        setProjects(ProjectData)
      }, []);

  return (
    <div className='flex flex-col'>
      <Navbar/>
      <div className='flex flex-col w-full h-auto bg-bg-primary pt-[14vh] pb-[8vh] items-center'>
        <h1 className="font-header font-normal text-linear-text text-[90px]">PROJECTS</h1>
        <p className="font-poppins font-thin text-third -mt-6 text-[17px]">Turning coffee into <span className='text-secondary font-semibold'>code</span>. Here's the <span className='text-secondary font-semibold'>result</span>.</p>
        <div className='flex flex-row flex-wrap gap-8 pt-15 w-300 justify-center'>
          {projects.map((project, index) =>  <div key={index} className='flex flex-col w-90 bg-white rounded-[10px] overflow-hidden shadow-md hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2'>
                <img src={project.image} className='w-full h-50 object-cover' alt="" />
                <div className='flex flex-col px-4 py-6 w-full'>
                  <div className='flex flex-row justify-between items-center'>
                    <h1 className='font-poppins font-semibold text-third text-[15px]'>{project.name}</h1>
                    <a href={project.link}><img src={github} className='w-4.5' alt="" /></a>
                  </div>
                  <div className='flex flex-row flex-wrap pt-4 gap-x-3 gap-y-2 w-full h-auto'>
                    {project.stack.map((stack, indexs) =>  <p key={indexs} className='font-poppins font-normal text-third text-[12px] border-[1px] border-border px-3 py-1'>{stack}</p>)}
                  </div>
                  <p className='font-poppins font-normal text-third text-[12px] pt-4 text-justify leading-[180%]'>{project.description}</p>
                </div>
            </div>)}
        </div>
      </div>
    </div>
  )
}

export default Projects
