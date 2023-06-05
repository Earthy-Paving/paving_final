// AboutUs.js

import React from 'react';
import './AboutUs.css';
import ImageGallery from '../components/carousel';
import ContactUs from './ContactUs';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1 className="about-us-title">About Us</h1>
        <p style={{fontSize:"20px"}}>At <b>Earthy Paving</b>, we are committed to delivering high-quality paving solutions to our clients at an affordable price. We understand that your property is a significant investment, which is why we provide durable and long-lasting paving services that will enhance its value and aesthetics.
          Our team of experienced professionals is dedicated to providing exceptional customer service and ensuring that every project is completed to the highest standards. We offer a wide range of paving designs to suit your style and preferences, and our installation process is quick and efficient.
          We take pride in using only the best materials and equipment to deliver paving solutions that will stand the test of time. With <b>Earthy Paving</b>, you can be confident that your property is in good hands. Contact us today to learn more about our services and how we can help transform your outdoor space.</p>
        <div><br/>
          <h2>Our Team</h2>
        </div><br/>
        <div className="team-members">
          <div className="team-member">
            <img
              className="team-member-avatar"
              src="https://res.cloudinary.com/dejwpag1r/image/upload/v1685897812/raji01_bzst01.png"
              alt="Member 1"
            />
            <div className="team-member-info">
              <h3 className="team-member-name">Rajitha.M</h3>
              <p className="team-member-role">CEO</p>
            </div>
          </div>
          <div className="team-member">
            <img
              className="team-member-avatar"
              src="https://res.cloudinary.com/dejwpag1r/image/upload/v1685895769/sathu02_xp48vc.png"
              alt="Member 2"
            />
            <div className="team-member-info">
              <h3 className="team-member-name">Saju.S</h3>
              <p className="team-member-role">CTO</p>
            </div>
          </div>
          <div className="team-member">
            <img
              className="team-member-avatar"
              src="https://res.cloudinary.com/dejwpag1r/image/upload/v1685895769/saju1_g9va5s.jpg"
              alt="Member 3"
            />
            <div className="team-member-info">
              <h3 className="team-member-name">Sathu.K</h3>
              <p className="team-member-role">CTO</p>
            </div>
          </div>
        </div>
      </div>
      <ContactUs/>
      <div className='imageContainer'>
        <ImageGallery />
      </div>
    </div>
  );
};

export default AboutUs;
