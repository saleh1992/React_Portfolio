import React from 'react'
import {AiFillLinkedin} from "react-icons/ai"
import {FaGithub} from "react-icons/fa"
import {FaFacebookSquare} from "react-icons/fa"

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/saleh-abd-elmoneam-6429069a/" target="_blank" ><AiFillLinkedin /></a>
        <a href="https://github.com/saleh1992" target="_blank"><FaGithub /></a>
        <a href="https://www.facebook.com/saleh.almoneam/" target="_blank"><FaFacebookSquare /></a>
    </div>
  )
}

export default HeaderSocial