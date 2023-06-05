// // ContactUs.js

// import React from 'react';
// import './ContactUs.css';

// const ContactUs = () => {
//   return (
//     <div className="contact-us-container">
//       <h1 className="contact-us-title">Contact Us</h1>
//       <form className="contact-us-form">
//         <input type="text" placeholder="Your Name" />
//         <input type="email" placeholder="Your Email" />
//         <textarea placeholder="Your Message" rows="5" />
//         <button type="submit">Send Message</button>
//       </form>
//     </div>
//   );
// };

// export default ContactUs;


import React, { useState } from 'react';
import axios from 'axios';
import './ContactUs.css';
const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create an object with the form data
    const formData = {
      name: name,
      email: email,
      message: message
    };
    // Send the form data to the backend server
    // fetch('/submit', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(formData)
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     // Handle the response from the backend as needed
    //   })
    //   .catch(error => {
    //     console.error(error);
    //     // Handle any errors that occur during the form submission
    //   });
    try {
      const response = axios.post('http://localhost:8080/contactUs', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="contact-us-container">
      <h1 className="contact-us-title">Contact Us</h1>
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