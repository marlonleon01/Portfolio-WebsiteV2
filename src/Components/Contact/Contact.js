import "./Contact.css"
import React, { useRef } from 'react';
import emailjs from "emailjs-com"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import {faFacebookMessenger} from "@fortawesome/free-brands-svg-icons"
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons"

export function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ljlfdwc', 'template_of7n527', form.current, '339EaFdXiVuPblrpy')

        e.target.reset();
      };

    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <div className="container contact-container">
                <div className="contact-options">
                    <article className="contact-option">
                        <FontAwesomeIcon icon={faEnvelope} className="contact-icon"></FontAwesomeIcon>
                        <h4>Email</h4>
                        <h5>marlon.leon2025@gmail.com</h5>
                        <a href="mailto:marlon.leon2025@gmail.com" target="_blank" rel="noopener noreferrer">
                            Send an email
                        </a>
                    </article>
                    <article className="contact-option">
                        <FontAwesomeIcon icon={faFacebookMessenger} className="contact-icon"></FontAwesomeIcon>
                        <h4>Messenger</h4>
                        <a href="https://m.me/marlon.leon.710/" target="_blank" rel="noopener noreferrer">
                            Send a message
                        </a>
                    </article>
                    <article className="contact-option">
                        <FontAwesomeIcon icon={faWhatsapp} className="contact-icon"></FontAwesomeIcon>
                        <h4>WhatsApp</h4>
                        <h5>(305)904-0392</h5>
                        <a href="https://api.whatsapp.com/send?phone=+13059040392" target="_blank" rel="noopener noreferrer">
                            Send a message
                        </a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <input type="text" name="subject" placeholder="Subject" required />
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}