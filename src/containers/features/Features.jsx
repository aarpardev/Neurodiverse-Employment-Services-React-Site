import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'When do I start?',
    text: 'No matter where you are, we are here to help you. You can start to set yourself up with the best possible oppurtunities in the future.',
  },
  {
    title: 'What can I do with my profile?',
    text: 'Sending your profile to employers can help you unmask your neurodivergence off the bat (avoiding that awkward conversation around disclosure) and make sure recruiters have an understanding of what your unique strengths are and the accommodations you might need throughout the process.',
  },
  {
    title: 'How is your service different from a regular job agency?',
    text: 'Because regular agencies do not cover all the multi-dimensional aspects of your neurodivergence, we display work samples, neuro-exceptional talent, and accommodations you present.',
  },
  {
    title: 'Do you accept self-diagnosis?',
    text: 'Yes, we accept self-diagnosed candidates! While you are welcome to share your form of neurodivergence, that decision to share is completely up to you.',
  },
];

const Features = () => {
  return (
    <div className="neuro__features section__padding" id="features">
    <div className="neuro__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="neuro__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
  )
}

export default Features