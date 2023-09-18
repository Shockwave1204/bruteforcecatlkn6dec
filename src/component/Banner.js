import React from 'react';
import Typewriter from 'typewriter-effect';
import lkn from '../lkn.jpg';
import { FiDownloadCloud } from 'react-icons/fi';
import lkn2 from '../lkn2.jpg';
import ans from '../bg.png';
import mee from '../hacker.gif';
import mees from '../h.gif';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HeroSection = () => {
 const handleDownloadClick = () => {
  window.location.href = 'https://drive.google.com/drive/folders/1pCXke051wufGUW0XjTuMqyCmljLzfhwu?usp=sharing';
 };
 return (
  <div className="flex flex-col-reverse items-center xm:flex-reverse mt-[100px] md: lg:">
   <div className="container mx-auto px-6 flex flex-col py-16 items-center sm:flex-row md:flex">

    <div className="w-full md:w-3/4">
     <h1 className="text-9xl sm:text-9xl md:text-9xl font-black flex flex-col leading-none">
      <div className="text-6xl md:text-8xl font-bold">
       👋
       <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
        Hi, I'm Likhon
       </span>
      </div>
     </h1>

     <div className="typewriter-container text-[35px] md:text-[80px] lg:text-[80px]">
      <Typewriter
       options={{
        strings: ['Full-Stack Developer', 'Frontend Engineer', 'React Developer', 'ML Engineer'],
        autoStart: true,
        loop: true,
        delay: 20,
        typeSpeed: 100,
       }}
      />
      <div className="flex mt-4">
       <button onClick={handleDownloadClick} className='btn btn-success mr-3 bg-green-500 shadow-lg shadow-green-500/50'><FiDownloadCloud /> Download Resume</button>
       <button className='btn btn-primary bg-gray-200 shadow-lg shadow-gray-200/50'>Hire Me</button>
      </div>
     </div>
    </div>
    <div className='mb-[20px] md: lg:'>

    </div>
    <div className='w-full md:w-1/2 mt-8 md:mt-0 lg:'>
     <img src={mee} style={{
      maxWidth: '600px'
     }} className="w-full " alt="Illustration" />
    </div>

   </div>
  </div>
 );
};

const Banner = () => {
 return (
  <main className="">
   <HeroSection />
  </main>
 );
};

export default Banner;
