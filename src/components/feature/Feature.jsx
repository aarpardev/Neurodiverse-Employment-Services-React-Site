import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => {
  return (
    <div className="neuro__features-container__feature" id="features">
    <div className="neuro__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="neuro__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
  )
}

export default Feature