import React from 'react'
import './contact.css'
import '../index.css'

function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-section">
                <h1>Contact Section</h1>
            </div>
            <div className="contact-form">
            <form className="main-form">
                <h1>Contact Us</h1>     <br/>
                <input type="text" placeholder="Your Name" className="input-style"/><br/><br/>
                <input type="email" placeholder="Your Email" className="input-style"/><br/><br/>
                <textarea placeholder="Type Message" className="input-style"></textarea><br/><br/>
                <button className="btn">Send Message</button>
            </form>
            </div>
            <a
            href="https://wa.me/254705719678"
            class="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer">
            <i class="fa fa-whatsapp whatsapp-icon"></i>
            </a>
        </div>
    )
}

export default Contact