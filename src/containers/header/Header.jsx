import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import neurominorities from '../../assets/neurominorities.png';

const Header = () => {
  return (
    <div className="neuro__header section__padding" id="home">
    <div className="neuro__header-content">
      <h1 className="gradient__text">Neurodiversity Is Beautiful, But Often Misunderstood</h1>
      <p>Sign up for a weekly newsletter that tells you stories of the struggles and success stories behind individuals with complex and amazing minds.</p>

      <div className="neuro__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Subscribe</button>
      </div>

      <div className="neuro__header-content__people">
        <img src={people} alt="People" />
        <p>9,000+ people requested a newsletter in the last 24 hours</p>
      </div>
    </div>

    <div className="neuro__header-image">
      <img src={neurominorities} alt="Scary Face"/>
    </div>
  </div>
  )
}

export default Header