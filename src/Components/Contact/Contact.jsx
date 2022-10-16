import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import {IoIosArrowForward} from 'react-icons/io'


const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
       
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
         
            <a href="mailto:okosama06@@gmail.com" target="_blank">
              Send a massage <IoIosArrowForward className="icon"/>
            </a>
            
          </article>
          <article className="contact__option">
            <BsInstagram className="contact__option-icon" />
            <h4>Messanger</h4>
          
            <a href="https://www.instagram.com/onk7376/" target="_blank">
              Send a massage <IoIosArrowForward className="icon"/>
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>

            <a
              href="https://api.whatsapp.com/send?phone=+91 7376772385&text=Hi%20There!"
              target="_blank"
            >
              Send a massage <IoIosArrowForward className="icon"/>
            </a>
          </article>
  
      </div>
    </section>
  );
};

export default Contact;
