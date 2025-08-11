import React from 'react'
import Navbar from '../components/Navbar'
import bromo from "../../public/pic/projects/bromo.png"
import location from "../../public/icon/locaction_gray.png"

const Achievements = () => {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <div className='flex flex-col w-full bg-bg-primary h-screen pt-[14vh] items-center'>
         <h1 className="font-header font-normal text-linear-text text-[90px]">ACHIEVEMENTS</h1>
         <p className="font-poppins font-thin text-third -mt-6 text-[17px]">Here are the <span className="text-secondary font-semibold">things</span> I have done and feel <span className='text-secondary font-semibold'>happy</span> about.</p>
         {/* <div className='flex flex-col mt-10 bg-white rounded-[10px] overflow-hidden shadow-md hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2'>
            <div className='flex flex-row rounded-[10px] overflow-hidden gap-5'>
                <img src={bromo} className='w-40 h-35 object-cover' alt="" />
                <div className='flex flex-col'>
                    <h1 className='font-poppins font-semibold text-third text-[17px]'>1st Place in Web Development</h1>
                </div>
            </div>
         </div> */}
         <div className='flex flex-row w-250 pt-15 justify-center gap-5'>
           <div className='flex flex-col w-90 bg-white rounded-[10px] overflow-hidden shadow-md hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2'>
            <div className='flex flex-col px-4 py-5 w-full'>
                <h1 className='font-poppins font-semibold text-third text-[13px]'>1st Place in Website Developement</h1>
                <p className='font-poppins font-normal text-third text-[12px] pt-1 text-justify leading-[180%]'>I was selected as the 1st place winner in this team competition because I helped create a website that teaches people about the dangers of online gambling. My team and I worked hard together, finished the project, and we were very happy to win 1st place!</p>
                <div className='flex flex-row items-center pt-4 gap-2'>
                  <img src={location} className='w-3 h-auto object-contain' alt="" />
                  <p className='font-poppins font-normal text-third text-[12px]'>Beefest | Universitas Jakarta</p>
                </div>
            </div>
           </div>
           <div className='flex flex-col w-90 bg-white rounded-[10px] overflow-hidden shadow-md hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2'>
            <div className='flex flex-col px-4 py-5 w-full'>
                <h1 className='font-poppins font-semibold text-third text-[13px]'>1st Place in Website Developement</h1>
                <p className='font-poppins font-normal text-third text-[12px] pt-1 text-justify leading-[180%]'>I was selected as the 1st place winner in this team competition because I helped create a website that teaches people about the dangers of online gambling. My team and I worked hard together, finished the project, and we were very happy to win 1st place!</p>
                <div className='flex flex-row items-center pt-4 gap-2'>
                  <img src={location} className='w-3 h-auto object-contain' alt="" />
                  <p className='font-poppins font-normal text-third text-[12px]'>Beefest | Universitas Jakarta</p>
                </div>
            </div>
           </div>
           <div className='flex flex-col w-90 bg-white rounded-[10px] overflow-hidden shadow-md hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2'>
            <div className='flex flex-col px-4 py-5 w-full'>
                <h1 className='font-poppins font-semibold text-third text-[13px]'>1st Place in Website Developement</h1>
                <p className='font-poppins font-normal text-third text-[12px] pt-1 text-justify leading-[180%]'>I was selected as the 1st place winner in this team competition because I helped create a website that teaches people about the dangers of online gambling. My team and I worked hard together, finished the project, and we were very happy to win 1st place!</p>
                <div className='flex flex-row items-center pt-4 gap-2'>
                  <img src={location} className='w-3 h-auto object-contain' alt="" />
                  <p className='font-poppins font-normal text-third text-[12px]'>Beefest | Universitas Jakarta</p>
                </div>
            </div>
           </div>
         </div>
         
      </div>
    </div>
  )
}

export default Achievements
