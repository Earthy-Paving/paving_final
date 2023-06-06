import React from 'react';
import './AboutUs.css';
import Navigation from './Navigation';

const AboutUs = () => {
  return (
    <div>
      <Navigation/>
      <div className="about-us-container">
        <div className="about-us-header">
          <h1>About Us</h1>
          <p>Welcome to our website! We are a team of passionate individuals dedicated to providing high-quality products and excellent customer service.</p>
        </div>

        <div className="about-us-section">
          <div className="about-us-image">
            <img src="https://res.cloudinary.com/dejwpag1r/image/upload/v1686057713/Team-Work_zr8tir.webp" alt="Teamwork" />
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
            <img src="https://res.cloudinary.com/dejwpag1r/image/upload/v1686058443/mission_w4rtk8.avif" alt="Mission" />
          </div>
        </div>

        <div className="about-us-section">
          <div className="about-us-image">
            <img src="https://res.cloudinary.com/dejwpag1r/image/upload/v1686058442/values_id5uxc.jpg" alt="Values" />
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
            <img src="https://res.cloudinary.com/dejwpag1r/image/upload/v1686058442/join-team_ene3i1.avif" alt="Join Our Team" />
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

        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default AboutUs;

