import React from 'react';

const Navbar = () => {
 return (
  <div className="w-full 
    sticky top-0 z-50 bg-no-repeat lg:top-0 lg:mb-2 navbar bg-base-100 sticky z-10 top-0  mx-auto ">
   <div className="  navbar end">
    <div className="dropdown">
     <label tabIndex={0} className="btn btn-ghost lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
     </label>
     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a href='#about'>About Me</a></li>
      <li><a href='#skills'>Skills</a></li>
      <li><a href='#projects'>Projects</a></li>
      <li><a href='#cptracker'>CPTracker</a></li>
      <li><a href='#contact'>Contact</a></li>
     </ul>
    </div>
    <a className="btn btn-ghost normal-case text-3xl lg:ml-[250px]">lkn6dec</a>
   </div>
   <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 mr-[200px]">
     <li><a href='#about'>About Me</a></li>
     <li><a href='#skills'>Skills</a></li>
     <li><a href='#projects'>Projects</a></li>
     <li><a href='#cptracker'>CPTracker</a></li>
     <li><a href='#contact'>Contact</a></li>
    </ul>
   </div>
  </div>
 );
};

export default Navbar;