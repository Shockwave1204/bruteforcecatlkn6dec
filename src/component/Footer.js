import React from 'react';
import { BsFacebook } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa6'

import { AiFillGithub } from 'react-icons/ai'

import { AiOutlineInstagram } from 'react-icons/ai'

import { AiFillTwitterCircle } from 'react-icons/ai'

const Footer = () => {
 return (
  <footer className="flex flex-col space-y-10 justify-center " id='contact'>
   <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
    <a className="hover:text-gray-100 " href="#about">About Me</a>
    <a className="hover:text-gray-100" href="#skills">Skills</a>
    <a className="hover:text-gray-100" href="#projects">Projects</a>
    <a className="hover:text-gray-100" href="#cptracker">CPTracker</a>
    <a className="hover:text-gray-100" href="#contact">Contact</a>
   </nav>

   <div className="flex justify-center space-x-5 ">
    <div className="tooltip" data-tip="Facebook">
     <a href="https://facebook.com/yaseen38" target="_blank" rel="noopener noreferrer" className='text-2xl'>
      <BsFacebook className='' />
     </a>
    </div>
    <div className="tooltip" data-tip="Linkedin">
     <a href="https://linkedin.com/in/likhon15" target="_blank" rel="noopener noreferrer" className='text-2xl'>
      <FaLinkedinIn />
     </a>
    </div>
    <div className="tooltip" data-tip="Github">
     <a href="https://github.com/likhon15" target="_blank" rel="noopener noreferrer" className='text-2xl'>
      <AiFillGithub />
     </a>
    </div>
    <div className="tooltip" data-tip="Instagram">
     <a href="https://instagram.com/lknconfidential" target="_blank" rel="noopener noreferrer" className='text-2xl'>
      <AiOutlineInstagram />
     </a>
    </div>
    <div className="tooltip" data-tip="X">
     <a href="https://twitter.com/likhon_15" target="_blank" rel="noopener noreferrer" className='text-2xl'>
      <AiFillTwitterCircle />
     </a>
    </div>
   </div>
   <p className="text-center text-gray-100 font-medium pb-[50px]">&copy; 2023 lkn6dec. All rights reserved.</p>
  </footer>
 );
};

export default Footer;
