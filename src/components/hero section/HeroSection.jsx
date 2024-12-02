import React from 'react';
import './hero.css';
import Navigation from '../navigation/Navigation';

const HeroSection = () => {
  return (
    <section className='img-sec'>
      <Navigation />
      <section className='hero-sec'>
        <div className='hero-div'>
          <h2>100 years of</h2>
          <h1>Innovations</h1>
        </div>
      </section>
    </section>
  )
}

export default HeroSection;