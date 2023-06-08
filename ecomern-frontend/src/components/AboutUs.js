import React from 'react';
import './AboutUs.css';
import Navigation from './Navigation';

const AboutUs = () => {
  return (
    <div>
      <Navigation/> <br/> <br/><br/><br/>
      <div className="about-us-container">
        <div className="about-us-header">
          <h1>About Us</h1>
          <p style={{fontFamily:"sans-serif", fontSize:"25px"}}>Welcome to our website! We are a team of passionate individuals dedicated to providing high-quality products and excellent customer service.</p>
        </div>

        <div className="about-us-section">
          <div className="about-us-image">
            <img src="https://res.cloudinary.com/dejwpag1r/image/upload/v1686117739/our_-work-removebg-preview_g41vkj.png" alt="Teamwork" />
          </div>
          <div className="about-us-content">
            <h2>Our Story</h2>
            <p>Our journey began with a shared vision to create something extraordinary. We believe that by combining innovation, creativity, and hard work, we can make a difference in the world. From humble beginnings, we have grown into a strong team that is committed to delivering exceptional products.</p>
          </div>
        </div>

        <div className="about-us-section">
          <div className="about-us-content">
            <h2>Our Mission</h2>
            <p>At our core, we are driven by a mission to inspire and empower people. We strive to develop products that enhance lives, foster creativity, and bring joy to our customers. Through continuous improvement and a relentless pursuit of excellence, we aim to make a positive impact in the lives of individuals around the globe.</p>
          </div>
          <div className="about-us-image">
            <img src="https://res.cloudinary.com/dejwpag1r/image/upload/v1686117739/our-mission-removebg-preview_psrymz.png" alt="Mission" />
          </div>
        </div>

        <div className="about-us-section">
          <div className="about-us-image">
            <img src="https://res.cloudinary.com/dejwpag1r/image/upload/v1686118751/human-resources-vector-removebg-preview_iq0efb.png" alt="Values" />
          </div>
          <div className="about-us-content">
            <h2>Our Values</h2>
            <p>We hold ourselves to the highest standards of integrity, quality, and innovation. Our team is united by a set of core values that guide us in everything we do. We believe in transparency, collaboration, and a customer-centric approach. These values are the foundation of our success and the driving force behind our commitment to excellence.</p>
          </div>
        </div>

        <div className="about-us-section">
          <div className="about-us-content">
            <h2>Join Our Team</h2>
            <p>We are always looking for talented individuals who share our passion and values. If you are interested in joining our team, visit our Careers page to learn more about current opportunities.</p>
            <a href="/careers" className="btn">Explore Careers</a>
          </div>
          <div className="about-us-image">
            <img src="https://res.cloudinary.com/dejwpag1r/image/upload/v1686118502/Hybrid-Meeting-Room-removebg-preview_a8ev4j.png" alt="Join Our Team" />
          </div>
        </div>

        <div className="about-us-section">
          <div className="about-us-content">
            <h2>Our Team</h2>
          </div>
          <br/>
          <div className="team-members">
            <div className="team-member">
              <img
                className="team-member-avatar"
                src="https://res.cloudinary.com/dejwpag1r/image/upload/v1686115991/raji01-removebg-preview_vtung7.png"
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
                src="https://res.cloudinary.com/dejwpag1r/image/upload/v1686116156/sathu02-removebg-preview_esq560.png"
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
                src="https://res.cloudinary.com/dejwpag1r/image/upload/v1686116193/saju1-removebg-preview_clitic.png"
                alt="Member 3"
              />
              <div className="team-member-info">
                <h3 className="team-member-name">Sathu.K</h3>
                <p className="team-member-role">CTO</p>
              </div>
            </div>
          </div>
        </div>

        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default AboutUs;

