import { FaFacebookF } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"
import { IoLogoTwitter } from "react-icons/io"
import { BsSuitHeartFill } from "react-icons/bs"
import "./footer.css"
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Saleh</a>
      <ul className='permalinks'>
        <li><a href="#"> Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiences">Expeirience</a></li>
        <li><a href="#services">Services </a></li>
        <li><a href="#portfolio" >Portfolio</a></li>
        <li><a href="#testimonials">Testimonials </a></li>
        <li><a href="#contact">Contact </a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com/saleh.almoneam/" target="_blank"><FaFacebookF /></a>
        <a href="https://www.instagram.com/saleh_abd_almoneam/?hl=en" target="_blank"><FiInstagram /></a>
        <a href="https://twitter.com/SalehAbdAlmonea" target="_blank"><IoLogoTwitter /></a>
      </div>
      <div className="footer__copyright">
        <small>Made With <BsSuitHeartFill /> by Saleh © 2022</small>
      </div>
    </footer>
  )
}

export default Footer