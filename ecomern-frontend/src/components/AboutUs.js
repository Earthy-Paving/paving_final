import React from 'react';
import "./AboutUs.css";
import ImageGallery from '../components/carousel';

const AboutUs = () => {
  return (
    <div className='aboutUs'>
      <h2 className="title">About Us</h2>
     
      <div className="contentContainer">
        <p>
          At <b>Earthy Paving</b>, we are committed to delivering high-quality paving solutions to our clients at an affordable price. We understand that your property is a significant investment, which is why we provide durable and long-lasting paving services that will enhance its value and aesthetics.
        </p>
        <p>
          Our team of experienced professionals is dedicated to providing exceptional customer service and ensuring that every project is completed to the highest standards. We offer a wide range of paving designs to suit your style and preferences, and our installation process is quick and efficient.
        </p>
        <p>
          We take pride in using only the best materials and equipment to deliver paving solutions that will stand the test of time. With Earthy Paving, you can be confident that your property is in good hands. Contact us today to learn more about our services and how we can help transform your outdoor space.
        </p>
      </div>
      <div className="imageContainer">
        <ImageGallery />
      </div>
    </div>
  );
}

export default AboutUs;
