import React, { useRef } from 'react';
import './App.css';
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

import Home4 from './Home/Home4';
import Introduction from './Introduction/Introduction';
import AboutMe3 from './AboutMe/AboutMe3';
import Skill from './Skill/Skill';
import Why from './Skill/Why';
import Contact2 from './Contact/Contact2';

function App() {
  const ref = useRef(null);

  const options = {
    smooth: true,
  }
  return (
    <LocomotiveScrollProvider options={options} containerRef={ref}>
      <main data-scroll-container ref={ref}>
        <Home4 />
        <Introduction />
        <AboutMe3 />
        <Skill />
        <Why />
        <Contact2 />
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
