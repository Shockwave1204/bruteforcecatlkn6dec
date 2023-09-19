import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Banner from './component/Banner';
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Ache from './component/Ache';
import Contact from './component/Contact';
import Footer from './component/Footer';
import TimeLine from './component/TimeLine';
import Lang from './component/Lang';
// import Stepper from './component/Stepper'; // You can import this if needed
function App() {


  return (

    <div className="app  bg-gradient-to-l from-indigo-500 ..." style={{
      // Set the desired height for the container
    }}

    >
      <Lang />
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <TimeLine />
      <Ache />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
