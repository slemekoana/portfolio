import React from 'react';
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import { SiSubstack } from 'react-icons/si'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    // <section id='footer'>
      <footer>
        <ul className="permalinks">
          <li><a className='permalinks' href="#">Home</a></li>
          <li><a className='permalinks' href="#about">About</a></li>
          <li><a className='permalinks' href="#experience">Experience</a></li>
          <li><a className='permalinks' href="#portfolio">Portfolio</a></li>
        </ul>
      
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
        
        <div className="footer-copyright">
          <small>&copy; Copyright 2022. All rights reserved.</small> 
        </div>
        {/* <p className="built">
          Built with &#x2661; by <a href="https://www.linkedin.com/in/selaelo-lemekoana-59b96922a/" target='_blank'> Selaelo Lemekoana</a>
        </p> */}
      </footer>
    // </section>
  )
}

export default Footer
