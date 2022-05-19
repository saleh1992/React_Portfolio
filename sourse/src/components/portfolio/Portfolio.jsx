import React from 'react'
import "./portfolio.css"
import IMG from "../../assets/portfolio1.png"
import IMG2 from "../../assets/portfolio2.png"
import IMG3 from "../../assets/portfolio3.png"
import IMG4 from "../../assets/portfolio4.png"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.png"

const data = [
  {
    id: 1,
    image: IMG,
    title: 'Proficient Template and responsive build by HTML/CSS/Media Queries (Stark Template Clone)',
    github: "https://github.com/saleh1992/Stark_Template",
    demo: "https://saleh1992.github.io/Stark_Template/"
  },
  {
    id: 2,
    image: IMG2,
    title: 'Proficient Template and responsive build by HTML/CSS/Media Queries (Pizza Template Clone)',
    github: "https://github.com/saleh1992/Pizza-Shop",
    demo: 'https://saleh1992.github.io/Pizza-Shop/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Proficient Template and responsive build by HTML/CSS/Media Queries (Venam Template Clone)',
    github: 'https://github.com/saleh1992/Venam-e-commerce',
    demo: "https://saleh1992.github.io/Venam-e-commerce/"
  },
  {
    id: 4,
    image: IMG4,
    title: 'Proficient Template and responsive build by HTML/CSS/Media Queries (Book-Shop Template Clone)',
    github: 'https://github.com/saleh1992/Book-Shop',
    demo: 'https://saleh1992.github.io/Book-Shop/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Proficient Template and responsive build by HTML/CSS/Media Queries (Microsoft Template Clone)',
    github: 'https://github.com/saleh1992/Microsoft_HTML-CSS_Template',
    demo: 'https://saleh1992.github.io/Microsoft_HTML-CSS_Template/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Proficient Template and responsive build by HTML/CSS/Media Queries (Kasper Template Clone)',
    github: 'https://github.com/saleh1992/Kasper_Template_HTML-CSS',
    demo: 'https://saleh1992.github.io/Kasper_Template_HTML-CSS/'
  }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }, index) => {
          return (
            <article className='portfolio__item' key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
                <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio