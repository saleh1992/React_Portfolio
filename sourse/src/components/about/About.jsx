import React from 'react'
import "./about.css"
import ME from "../../assets/me-about.jpg"
import { FaAward } from "react-icons/fa"
import { AiOutlineFundProjectionScreen } from "react-icons/ai"
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experiences</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about__card'>
              <AiOutlineFundProjectionScreen className='about__icon' />
              <h5>Projects</h5>
              <small>10+</small>
            </article>
          </div>
          <p>
            Creative bilingual Frontend Developer skilled at creating a unique customer experience that highlights
            brand messaging. Drives customer experience improving click rates and conversion rates. Maintains up to date
            awareness of technological trends and technological advances. Able to facilitate translation of customer vision into a
            functional web experience that engages customers and improves the bottom line.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About