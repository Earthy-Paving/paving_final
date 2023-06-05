// ContactUs.js

import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1 className="contact-us-title">Contact Us</h1>
      <form className="contact-us-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message" rows="5" />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
