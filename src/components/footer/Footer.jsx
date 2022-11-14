import React from 'react';
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import { SiSubstack } from 'react-icons/si'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <section id='footer'>
      <footer>
        <a className='permalinks' href="#">Home</a>
        <a className='permalinks' href="#about">About</a>
        <a className='permalinks' href="#experience">Experience</a>
        <a className='permalinks' href="#portfolio">Portfolio</a>
      
        <div className='social'>
          <a className='soc-icon' href="https://www.linkedin.com/in/selaelo-lemekoana-59b96922a/" target='_blank'>
            <BsLinkedin/>
          </a>  
          <a className='soc-icon' href="https://selaelo.substack.com/" target='_blank'>
            <SiSubstack/>
          </a>
          <a className='soc-icon' href="https://github.com/slemekoana/" target='_blank'>
            <BsGithub/>
          </a>
        </div>
        
        <p className="copyright">&copy; Copyright 2022</p>
        <p className="built">
          Built with &#x2661; by <a href="https://www.linkedin.com/in/selaelo-lemekoana-59b96922a/" target='_blank'> Selaelo Lemekoana</a>
        </p>
      </footer>
    </section>
  )
}

export default Footer
