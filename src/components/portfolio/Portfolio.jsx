import React from 'react';
import './Portfolio.css';
import FiBytes from '../../assets/FiBytes.png';
import Movies from '../../assets/Watched-Movie.png'
import BlackJack from '../../assets/BlackJack.png';


const data = [
  {
    id: 1,
    image: Movies,
    title: 'Watched Movie Counter',
    github: 'https://github.com/slemekoana/watched-movie-counter',
    demo: 'https://watched-movie-counter.netlify.app/',
    type_of_btn: 'Live Demo',
    description: 'A counting web app for movies watched. The user has a choice to increment and save the data. In later iterations, it will be possible to save the incremented values to a database. Then see the number of movies they watched in a week, month or year.'
  },
  {
    id: 2,
    image: FiBytes,
    title: 'FiBytes by SheBytes (Hackathon)',
    github: 'https://j4sum.github.io/Athena-shebytes/',
    demo: 'https://www.figma.com/file/UYNuXL4UuLuJWQv0vawlJP/FiBytes?node-id=0%3A1&t=nRNtNZ6G9aWW5h1Y-1',
    type_of_btn: 'Live Figma Design',
    description: 'A website build to help victims of domestic violence to find their freedom. HTML5, CSS3 and JavaScript.'
  },
  {
    id: 3,
    image: BlackJack,
    title: 'BlackJack Game in JavaScript',
    github: '#',
    demo: 'https://javascript-blackjack-game.netlify.app',
    type_of_btn: 'Live Demo',
    description: 'BlackJack Game built using JavaScript'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {
          data.map(({ id, image, title, github, demo, type_of_btn, description }) => {
            return (
              <article key={id} className="portfolio-item">
                <div className="portfolio-item-image">
                  <img id='proj-img' src={image} alt={title} />
                </div>
                <h3 className='heading'>{title}</h3>
                <div className="cta">
                  <a className='btn' target='_blank' href={github}>GitHub</a>
                  <a className='btn primary-btn' target='_blank' href={demo}>{type_of_btn}</a>
                </div>
                <p>{description}</p>
              </article>

            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
