import React, { useState } from 'react';
import axios from 'axios';
import './ContactUs.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
      name: name,
      email: email,
      message: message
    };
    
    try {
      await axios.post('http://localhost:8080/contactUs', formData);
      setSuccessMessage('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="contact-us-container">
      <h1 className="contact-us-title" style={{ color: "black" }}>Contact Us</h1>
      {successMessage && <p>{successMessage}</p>}
      <form className="contact-us-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
