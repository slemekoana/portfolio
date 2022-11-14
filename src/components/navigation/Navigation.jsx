import React from 'react';
import './Navigation.css'
import { useState } from 'react';

const Navigation = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
      <nav>
          <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ""}>Home</a>
          <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ""}>About</a>
          <a href="#experience" >Experience</a>
          <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ""}>Skills</a>
          <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ""}>Portfolio</a>
    </nav> 
  )
}

export default Navigation
