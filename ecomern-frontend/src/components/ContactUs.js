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

  const handleDismiss = () => {
    setSuccessMessage('');
  };

  return (
    <section className="contact-us-container1">
      <div className="container2">
        <h2 className="contact-us-title">Contact Us</h2>
        <div className="row1">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-home phone"></i>
              </div>
              <div className="contact-info-content">
                <h4>Address</h4>
                <p style={{color:"#000"}}>Achchelu North, Nervely.</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-phone phone"></i>
              </div>
              <div className="contact-info-content">
                <h4>Phone</h4>
                <p style={{color:"#000"}}>0752662427</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-envelope phone"></i>
              </div>
              <div className="contact-info-content">
                <h4>Email</h4>
                <p style={{color:"#000"}}>earthypaving@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form className="contact-us-form" onSubmit={handleSubmit}>
              <h2>Send Message</h2>
              <div className="input-box">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <span>Full Name</span>
              </div>

              <div className="input-box">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span>Email</span>
              </div>

              <div className="input-box">
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <span>Type your Message...</span>
              </div>

              <div className="input-box">
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>

      {successMessage && (
        <div className="success-message">
          <p>{successMessage}</p>
          <button onClick={handleDismiss}>Dismiss</button>
        </div>
      )}
    </section>
  );
};

export default ContactUs;
