import React from 'react';
import Hero from './Hero/Hero';
import Cardinfo from './Cardinfo/Cardinfo';
import Card from './Card/Card';
import Treatment from './Treatment/Treatment';
import Doctor from './Doctor/Doctor';
import Testimonial from './Testimonial/Testimonial';
import Contact from './Contact/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <Cardinfo />
      <Card />
      <Treatment />
      <Doctor />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default Home;
