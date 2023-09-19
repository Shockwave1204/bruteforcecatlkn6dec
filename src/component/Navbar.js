import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Determine the active section based on scroll position
      const scrollPosition = window.scrollY;
      const sections = ['about', 'skills', 'projects', 'EWExp', 'cptracker', 'contact'];
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.clientHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId);
          }
        }
      }
      setActiveSection(null);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (sectionId) => {
    scrollToSection(sectionId);
    setActiveSection(sectionId); // Set the active section when the link is clicked
  };


  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "synthwave"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("cupcake");
    } else {
      setTheme("synthwave");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <div className="w-full sticky top-0 z-50 bg-no-repeat lg:top-0 lg:mb-2 navbar bg-base-100 sticky z-10 top-0 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li className='moon'><a href="">

              <label className="swap swap-rotate">

                {/* this hidden checkbox controls the state */}
                <input type="checkbox" onChange={handleToggle} />

                {/* sun icon */}
                <svg className="swap-on fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                {/* moon icon */}
                <svg className="swap-off fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

              </label>
            </a></li>

            <li><a onClick={() => handleLinkClick('about')} style={activeSection === 'about' ? { color: '', backgroundColor: '#1E40AF' } : {}}>About Me</a></li>
            <li><a onClick={() => handleLinkClick('skills')} style={activeSection === 'skills' ? { color: '', backgroundColor: '#1E40AF' } : {}}>Skills</a></li>
            <li><a onClick={() => handleLinkClick('projects')} style={activeSection === 'projects' ? { color: '', backgroundColor: '#1E40AF' } : {}}>Projects</a></li>
            <li><a onClick={() => handleLinkClick('EWExp')} style={activeSection === 'EWExp' ? { color: '', backgroundColor: '#1E40AF' } : {}}>EduQ & Work Exp.</a></li>
            <li><a onClick={() => handleLinkClick('cptracker')} style={activeSection === 'cptracker' ? { color: '', backgroundColor: '#1E40AF' } : {}}>CPTracker</a></li>
            <li><a onClick={() => handleLinkClick('contact')} style={activeSection === 'contact' ? { color: '', backgroundColor: '#1E40AF' } : {}}>Contact</a></li>
          </ul>
        </div>

        <a className={`btn btn-ghost normal-case text-3xl lg:ml-[250px]`}>
          lkn6dec
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 mr-[200px]">



          <li className='moon'><a href="">

            <label className="swap swap-rotate">

              {/* this hidden checkbox controls the state */}
              <input type="checkbox" onChange={handleToggle} />

              {/* sun icon */}
              <svg className="swap-on fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

              {/* moon icon */}
              <svg className="swap-off fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

            </label>
          </a></li>








          <li><a onClick={() => handleLinkClick('about')} style={activeSection === 'about' ? { color: '', backgroundColor: '#1E40AF' } : {}}>About Me</a></li>
          <li><a onClick={() => handleLinkClick('skills')} style={activeSection === 'skills' ? { color: '', backgroundColor: '#1E40AF' } : {}}>Skills</a></li>
          <li><a onClick={() => handleLinkClick('projects')} style={activeSection === 'projects' ? { color: '', backgroundColor: '#1E40AF' } : {}}>Projects</a></li>
          <li><a onClick={() => handleLinkClick('EWExp')} style={activeSection === 'EWExp' ? { color: '', backgroundColor: '#1E40AF' } : {}}>EduQ & Work Exp.</a></li>
          <li><a onClick={() => handleLinkClick('cptracker')} style={activeSection === 'cptracker' ? { color: '', backgroundColor: '#1E40AF' } : {}}>CPTracker</a></li>
          <li><a onClick={() => handleLinkClick('contact')} style={activeSection === 'contact' ? { color: '', backgroundColor: '#1E40AF' } : {}}>Contact</a></li>
        </ul>


      </div>
    </div>
  );
};

export default Navbar;
