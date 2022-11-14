import React from 'react'
import './contact.css'

function Contact() {
    return (
        <div className="contact-container">
            <div><img src="https://www.massagemag.com/wordpress/wp-content/uploads/1_2_Conversations.jpg" alt="image"/></div>
            <div className='feature'>
            {/* <div className="contact-section">
                <h1>Contact Section</h1>
            </div> */}
            <h1>Contact Us</h1>
            <div className="contact-form">
            <form className="main-form">
                     <br/>
                <label>your name: </label><input type="text" placeholder="Your Name" className="input-style"/><br/><br/>
                <label>email: </label><input type="email" placeholder="Your Email" className="input-style"/><br/><br/>
                <label>message: </label><textarea placeholder="Type Message" className="input-style"></textarea><br/><br/>
                <button className="btns">Send Message</button>
            </form>
            </div>

            </div>

        </div>
    )
}

export default Contact