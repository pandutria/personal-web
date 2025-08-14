import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import logo from "../../public/icon/logo.svg";
import plus from "../../public/icon/plus.png";
import image from "../../public/pic/me.png";


const Home = () => {
  useEffect (() =>  {
    document.title = 'Pandu Tria Adyatama | Personal Website';
  }, [])

  return (
    <div className='flex flex-col relative'>
      <Navbar/>
      <section className='flex w-full lg:h-screen md:h-screen h-screen bg-bg-primary justify-center lg:pt-[11vh] md:pt-[3vh] pt-[3vh]'>
        <div className='container flex lg:flex-row md:flex-col-reverse flex-col-reverse lg:w-290 md:w-full w-full lg:px-0 md:px-5 px-5 bg-bg-primary items-center lg:justify-between md:justify-center justify-center lg:gap-0 md:gap-10 gap-0'>
        <div data-aos="fade-right" className='flex flex-col justify-center lg:items-start md:items-center lg:w-170 md:w-full'>
          <div className='flex flex-row items-center gap-1'>
            <h1 className='font-poppins font-normal lg:text-[28px] md:text-[28px] text-[17px] text-third'>Hello, Pandu is here!</h1>
            <h1 className='lg:text-[32px] md:text-[32px] text-[25px] mb-3'>👋</h1>
          </div>
          <h1 className='font-poppins font-bold text-linear-text lg:text-[45px] md:text-[50px] text-[28px] lg:text-start md:text-center text-start'>Your Next Favorite Dev.</h1>
          <p className='font-poppins font-normal text-third lg:text-[13px] md:text-[14px] text-[13px] pt-8 lg:text-start md:text-center text-start'>I’m Pandu Tria Adyatama, an Information Technology student with a passion for tech and innovation.</p>
          <p className='font-poppins font-normal text-third lg:text-[13px] md:text-[14px] text-[13px] pt-5 lg:text-start md:text-center text-start'>I’Driven by a passion for <span className='font-semibold'>software development</span> and end-to-end <span className='font-semibold'>digital solutions</span>.</p>
          <p className='font-poppins font-normal text-third lg:text-[13px] md:text-[14px] text-[13px] pt-1 lg:text-start md:text-center text-start'>Currently focused <span className='font-semibold'>Android</span>, <span className='font-semibold'>Web</span>, and <span className='font-semibold'>Desktop</span> apps with a focus on design and functionality.</p>
          <p className='font-poppins font-normal text-third lg:text-[13px] md:text-[14px] text-[13px] pt-5 lg:text-start md:text-center text-start' style={{lineHeight: '1.8'}}> I love learning <span className='font-semibold'>new things</span> and <span className='font-semibold'>trying new challenges</span>. Exploring technology is fun for me, and I always enjoy <span className='font-semibold'>improving my skills</span> step by step.</p>
          <div className='flex flex-row pt-8 gap-2 items-center'>
            <h1 className='font-poppins font-semibold text-third lg:text-[45px] md:text-[50px] text-[30px]'>150</h1>
            <img src={plus} className='lg:w-6 md:w-9 w-5 h-auto object-contain' alt="" />
            <p className='font-poppins font-normal text-third lg:text-[15px] md:text-[16px] text-[13px] lg:w-75 md:w-80 pl-2'>From small experiments to real-world solutions that truly make impact.</p>
          </div>
        </div>
        <img data-aos="fade-left" src={image} className='lg:flex md:flex hidden lg:w-80 md:w-70 h-auto object-contain' alt="" />
      </div>
      </section>
    </div>
  )
}

export default Home