import React from 'react'
import "./portfolio.css"
import IMG from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"

import { useState } from 'react'



const data = [
  {
    id: 1,
    image: IMG,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization"
  },
  {
    id: 3,
    image: IMG3,
    title: 'Figma dashboard UI kit for data design web apps',
    github: "https://github.com",
    demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: "https://dribbble.com/shots/16588765-Orion-UI-kit-Charts-templates-infographics-in-Figma"
  },
  {
    id: 4,
    image: IMG4,
    title: 'Maintaining tasks and tracking progress',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  }
]


const Portfolio = () => {
  const [myData, setMyData] = useState([...data]);
  function renderData() {
    return myData.map(data => {
      return (
        <article className='portfolio__item' key={data.id}>
          <div className="portfolio__item-image">
            <img src={data.image} alt="" />
          </div>
          <h3>{data.title}</h3>
          <div className="portfolio__item-cta">
            <a href={data.github} className='btn' target="_blank" rel="noreferrer">Github</a>
            <a href={data.demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
      )
    })
  }
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {renderData()}
      </div>
    </section>
  )
}

export default Portfolio