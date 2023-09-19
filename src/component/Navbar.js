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
