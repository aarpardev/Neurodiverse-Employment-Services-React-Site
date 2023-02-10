import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => {
  return (
    <div className="neuro__possibility section__padding" id="possibilities">
    <div className="neuro__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="neuro__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Let our organization help you or a loved one harness the neuro-exceptional potential so you can work and live life to the fullest.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
  )
}

export default Possibility