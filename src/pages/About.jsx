import React from "react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import image from "../../public/pic/image.png";

const About = () => {
  useEffect(() => {
    document.title = "Pandu Tria Adyatama | Personal Website - About";
  }, []);

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-col w-full h-screen pt-[15vh] bg-bg-primary items-center">
        <h1 className="font-header font-normal text-linear-text text-[90px]">About Me</h1>
        <p className="font-poppins font-thin text-third -mt-6 text-[17px]">Want to <span className="text-secondary font-semibold">know</span> more <span className="text-secondary font-semibold">about</span> who I am?</p>
        <div className="flex flex-row pt-15 items-center gap-30">
          <img src={image} className='w-60' alt="" />
            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <p className="font-poppins font-semibold text-third text-[13px]">📱Android Developer & Digital Product Seller 💼</p>
                <p className="font-poppins font-normal text-third text-[12px] w-120">With over 3 years of experience in Android development, I focus on creating mobile apps that are simple, helpful, and user-friendly. I’ve also built and sold digital products, turning ideas into real tools that people can use. I enjoy exploring new challenges and improving my skills through every project I make.</p>
              </div>
              <div className="flex flex-col">
                <p className="font-poppins font-semibold text-third text-[13px]">🛠️Tech Enthusiast & Tech Content Creator🧑‍💻</p>
                <p className="font-poppins font-normal text-third text-[12px] w-120">I enjoy learning about technology and how it works. I like to explore new tools, try new things, and stay updated with tech trends. I also share what I learn through simple content to help others understand and enjoy tech too.</p>
              </div>
              <div className="flex flex-col">
                <p className="font-poppins font-semibold text-third text-[13px]">🏆Competition Enthusiast💡</p>
                <p className="font-poppins font-normal text-third text-[12px] w-120">I love joining tech competitions like web design, software engineering and etc. These events help me learn new things, think creatively, and improve my skills. I enjoy the challenge and always try to give my best in every competition I join.</p>
              </div>
              <div className="flex flex-col">
                <p className="font-poppins font-normal text-third text-[12px] w-120">I'm open to freelance projects and always happy to work with new people. If you have an idea or need help with tech, feel free to contact me anytime!</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
