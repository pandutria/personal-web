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
      <section className='flex w-full h-screen bg-bg-primary justify-center pt-[11vh]'>
        <div className='container flex flex-row w-280 bg-bg-primary items-center justify-between'>
        <div className='flex flex-col justify-center w-170'>
          <div className='flex flex-row items-center gap-1'>
            <h1 className='font-poppins font-normal text-[28px] text-third'>Hello, Pandu is here!</h1>
            <h1 className='text-[32px] mb-3'>👋</h1>
          </div>
          <h1 className='font-poppins font-bold text-linear-text text-[45px]'>Your Next Favorite Dev.</h1>
          <p className='font-poppins font-normal text-third text-[13px] pt-8'>I’m Pandu Tria Adyatama, an Information Technology student with a passion for tech and innovation.</p>
          <p className='font-poppins font-normal text-third text-[13px] pt-5'>I’Driven by a passion for <span className='font-semibold'>software development</span> and end-to-end <span className='font-semibold'>digital solutions</span>.</p>
          <p className='font-poppins font-normal text-third text-[13px] pt-1'>Currently focused <span className='font-semibold'>Android</span>, <span className='font-semibold'>Web</span>, and <span className='font-semibold'>Desktop</span> apps with a focus on design and functionality.</p>
          <p className='font-poppins font-normal text-third text-[13px] pt-5' style={{lineHeight: '1.8'}}> I love learning <span className='font-semibold'>new things</span> and <span className='font-semibold'>trying new challenges</span>. Exploring technology is fun for me, and I always enjoy <span className='font-semibold'>improving my skills</span> step by step.</p>
          <div className='flex flex-row pt-8 gap-2 items-center'>
            <h1 className='font-poppins font-semibold text-third text-[45px]'>150</h1>
            <img src={plus} className='w-6 h-auto object-contain' alt="" />
            <p className='font-poppins font-normal text-third text-[15px] w-75 pl-2'>From small experiments to real-world solutions that truly make impact.</p>
          </div>
        </div>
        <img src={image} className='w-80' alt="" />
      </div>
      </section>
    </div>
  )
}

export default Home