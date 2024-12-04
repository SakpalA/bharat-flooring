import React from 'react';
import './hero.css';
import Navigation from '../navigation/Navigation';
import SmallTiles from '../common component/small tiles/SmallTiles';

const HeroSection = () => {
  return (
    <section className='img-sec'>
      <Navigation />
      <section className='hero-sec'>
        <div className='hero-div'>
          <h2>100 years of</h2>
          <h1>Innovations</h1>
        </div>
        <SmallTiles 
        para1= "LUXOTEL, Art Gallery Goa "
        para2= "Designed by Xyz, Firdaus Designer"
        featured= "Featured in Vogue magazine, Feb 2023"
        reverse/>
      </section>
    </section>
  )
}

export default HeroSection;