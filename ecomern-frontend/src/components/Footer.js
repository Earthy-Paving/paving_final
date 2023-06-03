import React from 'react';
import "./Footer.css"


function Footer() {
  return (
    <div>
       {/* Footer */}
<footer className="text-center text-lg-start bg-light text-muted">
  {/* Section: Social media */}
  {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"> */}
    {/* Left */}
    {/* <div className="me-5 d-none d-lg-block" style={{"backgroundColor":'#f8f8f9'}}> */}
      {/* <span>Get connected with us on social networks:</span> */}
    {/* </div> */}
    {/* Left */}
    {/* Right */}
    {/* <div style={{"backgroundColor":"#f8f8f9"}}> */}
      {/* <a href className="me-4 text-reset"> */}
        {/* <i className="fab fa-facebook-f" /> */}
      {/* </a> */}
      {/* <a href className="me-4 text-reset"> */}
        {/* <i className="fab fa-twitter" /> */}
      {/* </a> */}
      {/* <a href className="me-4 text-reset"> */}
        {/* <i className="fab fa-google" /> */}
      {/* </a> */}
      {/* <a href className="me-4 text-reset">
        <i className="fab fa-instagram" />
      </a> */}
      {/* <a href className="me-4 text-reset"> */}
        {/* <i className="fab fa-linkedin" /> */}
      {/* </a> */}
     
    {/* </div> */}
    {/* Right */}
  {/* </section> */}
  {/* Section: Social media */}
  {/* Section: Links  */}
  <section className="footer">
    <div className="container text-center text-md-start mt-5 " style={{paddingTop:"15px"}}>
      {/* Grid row */}
      <div className="row mt-3">
        {/* Grid column */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* Content */}
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3" />Earthy Paving
          </h6>
          {/* <img src="https://res.cloudinary.com/dy1pydfmg/image/upload/v1683693189/logo_500-removebg-preview_fauoek.png" className='logo'/> */}

          <p>
            Pave Your Waying Earthy Paving.
            We Always Be With You <br /><br /> <strong>   © 2023 Copyright: Earthy Paving </strong>

          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p className='name'>
            <a href="/category/grasses" className="text-reset">Grasses</a>
          </p>
          <p className='name'>
            <a href="/category/stones" className="text-reset">Stones</a>
          </p>
          <p className='name'>
            <a href="/category/works" className="text-reset">Our Works</a>
          </p>
          
        </div>
        {/* Grid column */}
        {/* Grid column */}
        
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3" />Achchelu North, Nervely.</p>
          
          <p><i className="fas fa-phone me-3" /> 0752662427</p>
          <p><i className="fas fa-print me-3" /> 0763477240</p>
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </div>
  </section>
  {/* Section: Links  */}
  {/* Copyright */}
  {/* <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © 2023 Copyright:
    <p className="text-reset fw-bold">Earthy Paving</p>
  </div> */}
  {/* Copyright */}
</footer>
{/* Footer */}

    </div>
  )
}

export default Footer;