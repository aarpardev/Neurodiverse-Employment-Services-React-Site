import React from 'react';
import Feature from '../../components/feature/Feature';
import './neurodiversity.css';

const Neurodiversity = () => {
  return (
    <div className="neuro__whatneuro section__margin" id="neurodiversity">
    <div className="neuro__whatneuro-feature">
      <Feature title="What is Neurodiversity?" text="Neurodiversity is the concept that all humans vary in terms of our neurocognitive ability. Everyone has both talents and things they struggle with. However, for some people the variation between those strengths and challenges is more pronounced, which can bring advantage but can also be disabling." />
    </div>
    <div className="neuro__whatneuro-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Check out some articles below.</p>
    </div>
    <div className="neuro__whatneuro-container">
      <Feature title="Performance" text="Neurodivergent people tend to find some things very easy and other things incredibly hard. This usually leads to an inconsistent performance at school or work." />
      <Feature title="Advantages" text="Neurodiversity can be a competitive advantage when the individuals are in the right environment, making use of their strengths, instead of constantly trying to overcome challenges. To achieve this we must create inclusive spaces to work and learn that reduce disabling factors and amplify diverse abilities." />
      <Feature title="Language" text="We are using the terms neurominority/ neurodivergent/ neurodistinct to refer to less typical neurotypes, such as ADHD, autism, dyslexia, dyspraxia, dyscalculia, dysgraphia and Tourette syndrome. We also recognise that any neurocognitive profile that is not “neurotypical” could be included as a minority group, which might include intellectual disabilities, mental health conditions, acquired brain injury or more." />
    </div>
  </div>
  )
}

export default Neurodiversity