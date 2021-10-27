import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './Contact.css'

function Contact() {
  return (
    <div className="section">
      <h2 className="underline" id="Contact">Contact</h2>
      <div className="inner-section contact-section">
        <div className="contact-links">
          <a target="_blank" rel="noreferrer" className="contact-links" href="https://www.linkedin.com/in/aya-mallah/"><p>LinkedIn</p><FontAwesomeIcon icon={faLinkedin} className="contact-icon" /></a>
          <a target="_blank" rel="noreferrer" className="contact-links" href="https://github.com/AyaMallah"><p>Github</p><FontAwesomeIcon icon={faGithub} className="contact-icon" /></a>
          <a target="_blank" rel="noreferrer" className="contact-links" href="mailto:ayamallah@hotmail.co.uk"><p>Email</p><FontAwesomeIcon icon={faEnvelope} className="contact-icon" /></a>
        </div>
      </div>
    </div>
  )
}
export default Contact