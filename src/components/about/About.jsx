import React from "react";
import './About.css';
import ME from '../../assets/20210901_075229.jpg'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about-content">
          <p>
            Selaelo is a person, who never sit idle. She codes to improve her problem-solving and technical skills. 
            To gain experience and learn to work in diverse teams, she participates in global hackathons.
            If she is not coding, she designs in Figma. She writes what she learns about UX/UI design on <a href="https://selaelo.substack.com/"> Substack</a>.
            In her spare time she read books, prefer Sci-Fi and Fantansy, but some Non-Fiction like Show Your Work find a way to enter her reading list.
            If Selaelo is not doing any of the above, she takes part in internal conflict on which series to watch. 
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
