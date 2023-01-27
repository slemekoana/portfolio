import React from "react";
import './About.css';
import ME from '../../assets/Portfolio.jpg'

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={ME} alt="Selaelo Lemekoana" />
          </div>
        </div>
        <div className="about-content">
          <p>
            Selaelo never sits idle. She codes to improve her problem-solving and technical skills. To gain experience, she participates in global hackathons.
If she is not coding, she designs in Figma. She writes what she learns about her learning experience on <a href="https://selaelo.substack.com/"> Substack</a>.
            In her spare time, she reads books and prefers Sci-Fi and fantasy, but some Non-Fiction like 'Show Your Work!' by Austin Kleon find a way to enter her reading list. 
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
