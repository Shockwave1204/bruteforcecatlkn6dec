// Skills.js
import React from 'react';
import Marquee from "react-fast-marquee";
import firebasee from '../fr.png'
import reactt from '../re.png'
import reduxx from '../red.png'
import sass from '../sass.png'
import nxt from '../nxt.png'
import tan from '../tan.png'
import tail from '../tail.png'
import express from '../es.png'
import socket from '../sc.png'
import rest from '../rest.png'
import ana from '../anaconda.png'
import vs from '../vscode.png'
import router from '../router.png'
import ssl from '../ssl.png'
import jss from '../js.png'
import mailgun from '../mailgun.png'
import post from '../post.png'
import ES from '../es6.png'
import mys from '../mys.png'
import supa from '../supa.png'
import jwtt from '../jwt.png'
import CSSS from '../css.png'
import mon from '../mon.png'
import axios from '../axios.svg'
import nodejs from '../nodejs.svg'
import typescript from '../typescript.svg'
import material from '../material.svg'
import bs from '../bs.png'
import str from '../stripe.png'
import nodemailer from '../nodemailer.webp'


import ij from '../ij.png'
import py from '../pycharm.png'
import subb from '../sublime.png'
import cb from '../codeblocks.png'
import an from '../android.png'





import python from '../language/python.png'
import cplusplus from '../language/c++.png'
import cc from '../language/c.png'
import jsds from '../language/js.png'
import jav from '../language/Java.png'

import algo from '../algo.png'
import dsa from '../dsa.png'


const Skills = () => {
 return (
  <div className='max-w-[1440px] mx-auto mt-[150px] ' id='skills'>
   <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center'>Skills</h1>




   <div>
    <h1 className='text-3xl mb-10'>Programming Language & others</h1>
    <Marquee
     direction='right'
     speed={10}
    >
     <div className='flex gap-5'>

      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '15px'
         }} src={python} alt="" />Python
        </h2>
       </div>
      </div>

      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '15px'
         }} src={algo} alt="" />Algorithm
        </h2>
       </div>
      </div>

      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '15px'
         }} src={dsa} alt="" />DataStructure
        </h2>
       </div>
      </div>


      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '30px'
         }} src={cplusplus} alt="" />C++
        </h2>
       </div>
      </div>

      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '30px'
         }} src={cc} alt="" />C
        </h2>
       </div>
      </div>


      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '30px'
         }} src={jsds} alt="" />JavaScript
        </h2>
       </div>
      </div>



      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '30px'
         }} src={jav} alt="" />Java
        </h2>
       </div>
      </div>


      <div className="card image-full mr-5">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '30px'
         }} src={typescript} alt="" />TypeScript
        </h2>
       </div>
      </div>

   

     </div>
    </Marquee>
   </div>








   <br />
   <div>
    <h1 className='text-3xl mb-10'>Frontend</h1>
    <Marquee
     speed={10}
    >






     <div className='flex gap-5'>

      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className="card-title">
         <img style={{
          width: '30px'
         }} src={firebasee} alt="" />Firebase
        </h2>
       </div>
      </div>



      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '30px'
         }} src={CSSS} alt="" />CSS
        </h2>
       </div>
      </div>


      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '30px'
         }} src={sass} alt="" />SASS
        </h2>
       </div>
      </div>


      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '30px'
         }} src={bs} alt="" />Bootstrap
        </h2>
       </div>
      </div>


      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '30px'
         }} src={tail} alt="" />TailwindCSS
        </h2>
       </div>
      </div>

      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '30px'
         }} src={jss} alt="" />JavaScript
        </h2>
       </div>
      </div>

      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '30px'
         }} src={ES} alt="" />JS ES6
        </h2>
       </div>
      </div>


      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '30px'
         }} src={reactt} alt="" />React.js
        </h2>
       </div>
      </div>


      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '30px'
         }} src={router} alt="" />ReactRouter
        </h2>
       </div>
      </div>

      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '30px'
         }} src={tan} alt="" />TanStack
        </h2>
       </div>
      </div>


      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className="card-title">
         <img style={{
          width: '30px'
         }} src={axios} alt="" />Axios
        </h2>
       </div>
      </div>



      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '30px'
         }} src={nxt} alt="" />Next.js
        </h2>
       </div>
      </div>

      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '30px'
         }} src={reduxx} alt="" />Redux
        </h2>
       </div>
      </div>

      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '30px'
         }} src={material} alt="" />MaterialUI
        </h2>
       </div>
      </div>

      <div className="card image-full mr-5">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '30px'
         }} src={typescript} alt="" />TypeScript
        </h2>
       </div>
      </div>

     </div>
    </Marquee>
   </div>




   <br />

   <div>
    <h1 className='text-3xl mb-10'>Backend</h1>
    <Marquee
     direction='right'
     speed={10}
    >
     <div className='flex gap-5'>

      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '15px'
         }} src={mon} alt="" />MongoDB
        </h2>
       </div>
      </div>



      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '30px'
         }} src={nodejs} alt="" />Node.js
        </h2>
       </div>
      </div>

      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '30px'
         }} src={express} alt="" />Express.js
        </h2>
       </div>
      </div>

      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '30px'
         }} src={supa} alt="" />Supabase
        </h2>
       </div>
      </div>

      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '30px'
         }} src={mys} alt="" />MySQL
        </h2>
       </div>
      </div>

      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '30px'
         }} src={rest} alt="" />RestApi
        </h2>
       </div>
      </div>

      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '30px'
         }} src={str} alt="" />Stripe
        </h2>
       </div>
      </div>

      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '30px'
         }} src={ssl} alt="" />SSlcommerz
        </h2>
       </div>
      </div>

      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '30px'
         }} src={nodemailer} alt="" />NodeMailer
        </h2>
       </div>
      </div>



      <div className="card image-full mr-5">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '30px'
         }} src={mailgun} alt="" />MailGun
        </h2>
       </div>
      </div>

      <div className="card image-full mr-5">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '30px'
         }} src={jwtt} alt="" />JWT
        </h2>
       </div>
      </div>

     </div>
    </Marquee>
   </div>












   <br />

   <div>
    <h1 className='text-3xl mb-10'>Tools</h1>
    <Marquee
     direction='left'
     speed={10}
    >
     <div className='flex gap-5'>

      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '15px'
         }} src={vs} alt="" />VsCode
        </h2>
       </div>
      </div>



      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '30px'
         }} src={subb} alt="" />Sublime
        </h2>
       </div>
      </div>



      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '30px'
         }} src={py} alt="" />Pycharm
        </h2>
       </div>
      </div>


      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '30px'
         }} src={cb} alt="" />CodeBlocks
        </h2>
       </div>
      </div>

      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '30px'
         }} src={an} alt="" />AndroidStd
        </h2>
       </div>
      </div>


      <div className="card image-full">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '30px'
         }} src={ana} alt="" />Anaconda
        </h2>
       </div>
      </div>

      <div className="card image-full mr-5">
       <div className="card-body w-[200px] text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h2 className='card-title'>
         <img style={{
          width: '30px'
         }} src={post} alt="" />Postman
        </h2>
       </div>
      </div>


     </div>
    </Marquee>
   </div>










  </div>
 );
};

export default Skills;
