import React, { useState, useEffect } from 'react';
import './hero.css';
import Navigation from '../navigation/Navigation';
import SmallTiles from '../common component/small tiles/SmallTiles';

const HeroSection = () => {
  const names = ["Innovations", "Craftsmanship", "Excellence"];
  const [currentNameIndex, setCurrentNameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNameIndex((prevIndex) => (prevIndex + 1) % names.length);
    }, 1500); // Change every 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [names.length]);

  return (
    <section className='img-sec'>
      <Navigation />
      <section className='hero-sec'>
        <div className='hero-div'>
          <h2>100 years of</h2>
          <div className='anime-div'>
            <h1 className="animated-text">{names[currentNameIndex]}</h1>
          </div>
        </div>
        <SmallTiles
          para1="LUXOTEL, Art Gallery Goa"
          para2="Designed by Xyz, Firdaus Designer"
          featured="Featured in Vogue magazine, Feb 2023"
          reverse
        />
      </section>
    </section>
  );
};

export default HeroSection;
