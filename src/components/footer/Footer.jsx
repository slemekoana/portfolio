import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <section id='footer'>
      <footer>
        <a className='permalinks' href="#">Home</a>
        <a className='permalinks' href="#about">About</a>
        <a className='permalinks' href="#experience">Experience</a>
        <a className='permalinks' href="#portfolio">Portfolio</a>
      <Social />
        <p className="copyright">&copy; Copyright 2022</p>
        <p className="built">
          Built with &#x2661; by <a href="https://www.linkedin.com/in/selaelo-lemekoana-59b96922a/" target='_blank'> Selaelo Lemekoana</a>
        </p>
      </footer>
    </section>
  )
}

export default Footer