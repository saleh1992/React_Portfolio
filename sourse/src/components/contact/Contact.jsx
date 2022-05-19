import "./contact.css"
import { MdOutlineEmail } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import { BsWhatsapp } from "react-icons/bs"
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_41v90xw', 'template_c8mlyvl', form.current, 'ZSGx2Xhvf41k1Xl2H')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact_option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>salehsites@gmail.com</h5>
            <a href="mailto: salehsites@gmail.com" target="_blank" >Send a message</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Massenger</h4>
            <h5>saleh.almoneam</h5>
            <a href="https://m.me/saleh.almoneam" target="_blank" >Send a message</a>
          </article>
          <article className="contact_option" >
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+201115467278</h5>
            <a href="https://api.whatsapp.com/send?phone=201115467278" target="_blank" >Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email " name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact