import React, { Component } from 'react';
import ani from '../an.gif';
import lkn from '../lkn.jpg';
import { FiDownloadCloud } from 'react-icons/fi';
import lkn2 from '../lkn2.jpg';
import lkn3 from '../lkn3.jpg';
import lkn4 from '../p1.jpg';
import lkn5 from '../p2.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Import WOW from wowjs
import WOW from 'wowjs';

class About extends Component {
 componentDidMount() {
  new WOW.WOW({
   live: false
  }).init();
 }

 render() {
  return (
   <div className='' id='about'>
    <div className='' id='about'>
     <div className='flex flex-col-reverse lg:flex-row items-center max-w-[1440px] mx-auto'>
      <div className='lg:w-1/2'>
       <Carousel
        autoPlay
        interval={4000}
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        className="max-w-[600px] custom-carousel wow fadeIn" data-wow-duration="0.3s" data-wow-delay="0.3s"
        styless
       >
        <div className="avatar m-8 ">
         <div className="w-full rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={lkn} alt="Slide 1" className='bg-blue-500 shadow-lg shadow-blue-500/50' />
         </div>
        </div>
        <div className="avatar m-8">
         <div className="w-full rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={lkn2} alt="Slide 2" />
         </div>
        </div>
        <div className="avatar m-8">
         <div className="w-full rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={lkn4} alt="Slide 3" />
         </div>
        </div>
        {/* Add more slides here if needed */}
       </Carousel>
      </div>
      <div className='lg:w-1/2 mt-10 m-[50px] md:m-[200px] lg:'>
       <h1 className='text-4xl font-bold text-blue-200'>About Me</h1>
       <br />
       <p className='text-2xl wow fadeInRight' data-wow-duration="0.5s" data-wow-delay="0.5s">
        I am a final year student of Computer Science and Engineering at Daffodil International University.
        <br />
        I am always ready to have new experiences, meet new people, and learn new things.
        <br />
        I do competitive programming & software development.
        <br />
        like web development, app development, etc.
        <br />
        My hobby is playing video games
       </p>
      </div>
     </div>
    </div>
   </div>
  );
 }
}

export default About;
