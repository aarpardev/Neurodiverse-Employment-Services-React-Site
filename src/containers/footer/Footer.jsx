import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="neuro__footer section__padding">
    <div className="neuro__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future?</h1>
    </div>

    <div className="neuro__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="neuro__footer-links">
      <div className="neuro__footer-links_logo">
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
      <div className="neuro__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="neuro__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="neuro__footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="neuro__footer-copyright">
      <p>Images and copy based on Genius Within and Mentra.</p>
    </div>
  </div>
  )
}

export default Footer