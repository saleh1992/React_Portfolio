import React from 'react'
import CTA from './CTA'
import ME from "../../assets/me.png"
import "./header.css"
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className='container header___container'>
        <h5>Hello I'm</h5>
        <h1> <span id='name'>Saleh</span> Abd Elmoanim</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
      
    </header>
  )
}

export default Header