import React from 'react';
import './Portfolio.css';
import FiBytes from '../../assets/FiBytes.png'
import Movies from '../../assets/Watched-Movie.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={Movies} alt="Watched movies Image" />
          </div>
          <h3>Watched Movie Counter</h3>
          <div className="cta">
          <a className='btn' target='_blank' href="https://github.com/slemekoana/watched-movie-counter">GitHub</a>
          <a className='btn primary-btn' target='_blank' href="#">Live Demo</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={FiBytes} alt="FiBytes Image" />
          </div>
          <h3>FiBytes by SheBytes</h3>
          <div className="cta">
            <a className='btn' target='_blank' href="https://j4sum.github.io/Athena-shebytes/">GitHub</a>
            <a className='btn primary-btn' href="https://www.figma.com/file/UYNuXL4UuLuJWQv0vawlJP/FiBytes?node-id=0%3A1&t=nRNtNZ6G9aWW5h1Y-1">Live Figma Design</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
