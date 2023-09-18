import React, { Component } from 'react';
import { BsLink45Deg } from 'react-icons/bs';
import food from '../web.png';
import web3 from '../web3.png';
import web4 from '../web4.png';
import bank from '../web2.png';
import onus from '../onus.png';
import newss from '../newss.png';
import types from '../type.png';

// Import WOW from wowjs
import WOW from 'wow.js';

class Projects extends Component {
 componentDidMount() {
  new WOW().init();
 }

 render() {
  return (
   <div>
    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-[200px]'>Projects</h1>
    <div className='  max-w-[1450px] lg:ml-[90px]' id='projects'>
     <div className='p-1 mr-5 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-5'>
      
      
      <div className="card w-94 ml-5 mt-5 border wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
       <figure><img src={web4} alt="Shoes" /></figure>
       <div className="card-body">
        <h2 className="card-title">
         AlphaCare - Portal Site
        </h2>
        <div className='flex gap-1'>
         <a href="https://doctors-portal-d93d4.web.app/" className='btn btn-sm'>live<BsLink45Deg /></a>
         <a href="https://github.com/likhon15/AlphaCare" className='btn btn-sm'>github code <BsLink45Deg /></a>
        </div>
        <div className="card-actions justify-end">
         <div className="badge badge-outline bg-blue-500 shadow-lg shadow-blue-500/50 text-white">React</div>
         <div className="badge badge-outline bg-green-500 shadow-lg shadow-green-500/50 text-white">NodeJS</div>
         <div className="badge badge-outline bg-green-500 shadow-lg shadow-green-500/50 text-white">MongoDB</div>
         <div className="badge badge-outline bg-gray-500 shadow-lg shadow-gray-500/50 text-white">ExpressJS</div>
         <div className="badge badge-outline bg-purple-500 shadow-lg shadow-purple-500/50 text-white">JWT</div>
         <div className="badge badge-outline bg-blue-500 shadow-lg shadow-blue-500/50 text-white">Firebase</div>
         <div className="badge badge-outline bg-blue-500 shadow-lg shadow-blue-500/50 text-white">TailwindCSS</div>
        </div>
       </div>
      </div>



      <div className="card w-94 ml-5  mt-5 border wow rollIn" data-wow-duration="1s" data-wow-delay="1s">
       <figure><img src={types} alt="Shoes" /></figure>
       <div className="card-body">
        <h2 className="card-title">
         SpeedTyper
        </h2>
        <div className='flex gap-1'>
         <a href="https://verdant-starship-15894b.netlify.app/" className='btn btn-sm'>live<BsLink45Deg /></a>
         <a href="https://github.com/likhon15/Food-Search-REST-api-project" className='btn btn-sm' disabled>github code <BsLink45Deg /></a>
        </div>
        <div className="card-actions justify-end">
         <div className="badge badge-outline bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white">Html</div>
         <div className="badge badge-outline bg-yellow-500 shadow-lg shadow-yellow-500/50 text-white">CSS</div>
         <div className="badge badge-outline bg-blue-500 shadow-lg shadow-blue-500/50 text-white">Bootstrap</div>
         <div className="badge badge-outline bg-yellow-500 shadow-lg shadow-yellow-500/50 text-white">JavaScript</div>
         <div className="badge badge-outline bg-blue-500 shadow-lg shadow-blue-500/50 text-white">RestApi</div>
        </div>
       </div>
      </div>




      <div className="card w-94 ml-5  mt-5 border wow rollIn" data-wow-duration="1s" data-wow-delay="1s">
       <figure><img src={newss} alt="Shoes" /></figure>
       <div className="card-body">
        <h2 className="card-title">
         News24_Hours
        </h2>
        <div className='flex gap-1'>
         <a href="https://beautiful-meerkat-18be58.netlify.app/" className='btn btn-sm'>live<BsLink45Deg /></a>
         <a href="https://github.com/likhon15/Food-Search-REST-api-project" className='btn btn-sm' disabled>github code <BsLink45Deg /></a>
        </div>
        <div className="card-actions justify-end">
         <div className="badge badge-outline bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white">Html</div>
         <div className="badge badge-outline bg-yellow-500 shadow-lg shadow-yellow-500/50 text-white">CSS</div>
         <div className="badge badge-outline bg-blue-500 shadow-lg shadow-blue-500/50 text-white">Bootstrap</div>
         <div className="badge badge-outline bg-yellow-500 shadow-lg shadow-yellow-500/50 text-white">JavaScript</div>
         <div className="badge badge-outline bg-blue-500 shadow-lg shadow-blue-500/50 text-white">RestApi</div>
        </div>
       </div>
      </div>





      <div className="card w-94 ml-5  mt-5 border wow rollIn" data-wow-duration="1s" data-wow-delay="1s">
       <figure><img src={onus} alt="Shoes" /></figure>
       <div className="card-body">
        <h2 className="card-title">
         OnusthanBazar.com
         </h2>
        <div className='flex gap-1'>
         <a href="https://dapper-lokum-0330d4.netlify.app/" className='btn btn-sm'>live<BsLink45Deg /></a>
         <a href="https://github.com/likhon15/Food-Search-REST-api-project" className='btn btn-sm'>github code <BsLink45Deg /></a>
        </div>
        <div className="card-actions justify-end">
         <div className="badge badge-outline bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white">Html</div>
         <div className="badge badge-outline bg-yellow-500 shadow-lg shadow-yellow-500/50 text-white">CSS</div>
         <div className="badge badge-outline bg-blue-500 shadow-lg shadow-blue-500/50 text-white">Bootstrap</div>
         <div className="badge badge-outline bg-yellow-500 shadow-lg shadow-yellow-500/50 text-white">JavaScript</div>
         <div className="badge badge-outline bg-blue-500 shadow-lg shadow-blue-500/50 text-white">RestApi</div>
        </div>
       </div>
      </div>



      <div className="card w-94 ml-5  mt-5 border wow rollIn" data-wow-duration="1s" data-wow-delay="1s">
       <figure><img src={food} alt="Shoes" /></figure>
       <div className="card-body">
        <h2 className="card-title">
         Food Search By Input Field
        </h2>
        <div className='flex gap-1'>
         <a href="https://food-search-rest-api-project.vercel.app/" className='btn btn-sm'>live<BsLink45Deg /></a>
         <a href="https://github.com/likhon15/Food-Search-REST-api-project" className='btn btn-sm'>github code <BsLink45Deg /></a>
        </div>
        <div className="card-actions justify-end">
         <div className="badge badge-outline bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white">Html</div>
         <div className="badge badge-outline bg-yellow-500 shadow-lg shadow-yellow-500/50 text-white">CSS</div>
         <div className="badge badge-outline bg-blue-500 shadow-lg shadow-blue-500/50 text-white">Bootstrap</div>
         <div className="badge badge-outline bg-yellow-500 shadow-lg shadow-yellow-500/50 text-white">JavaScript</div>
         <div className="badge badge-outline bg-blue-500 shadow-lg shadow-blue-500/50 text-white">RestApi</div>
        </div>
       </div>
      </div>

      <div className="card w-94 ml-5  mt-5 border border-gray-100 wow fadeInRight" data-wow-duration="1s" data-wow-delay="1s">
       <figure><img src={bank} alt="Shoes" /></figure>
       <div className="card-body">
        <h2 className="card-title">
         Normal Bank Project - JS DOM
        </h2>
        <div className='flex gap-1'>
         <a href="https://bank-project-two.vercel.app/" className='btn btn-sm'>live<BsLink45Deg /></a>
         <a href="https://github.com/likhon15/bank-project" className='btn btn-sm'>github code<BsLink45Deg /></a>
        </div>
        <div className="card-actions justify-end">
         <div className="badge badge-outline bg-orange-500 shadow-lg shadow-orange-500/50 text-white">Html</div>
         <div className="badge badge-outline bg-blue-500 shadow-lg shadow-blue-500/50 text-white">CSS</div>
         <div className="badge badge-outline bg-yellow-500 shadow-lg shadow-yellow-500/50 text-white">JavaScript</div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  );
 }
}

export default Projects;
