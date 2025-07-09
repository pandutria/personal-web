import React from 'react'
import Navbar from '../components/Navbar'
import { useEffect } from 'react'
import test from '../../public/icon/test.jpg'

const Projects = () => {
    useEffect(() => {
        document.title = "Pandu Tria Adyatama | Personal Website - Projects";
      }, []);

  return (
    <div className='flex flex-col'>
      <Navbar/>
      <div className='flex flex-col w-full h-screen bg-bg-primary pt-[15vh] items-center'>
        <h1 className="font-header font-normal text-linear-text text-[90px]">PROJETCS</h1>
        <p className="font-poppins font-thin text-third -mt-6 text-[17px]">Turning coffee into <span className='text-secondary font-semibold'>code</span>. Here's the <span className='text-secondary font-semibold'>result</span>.</p>
        <div className='flex flex-row pt-10'>
            <div className='flex flex-col bg-white rounded-[15px] overflow-hidden'>
                <img src={test} className='w-100 h-auto object-contain' alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
