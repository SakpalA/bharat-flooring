import React from 'react';
import './intro-two.css';
import years from '../../assets/images/years.png';
import OneLine from '../common component/one-line-text/OneLine';
import SmallTiles from '../common component/small tiles/SmallTiles';

const IntroTwo = () => {
  return (
    <section className='intro-two-sec'>
      <SmallTiles 
      para1= "Alenteho by Isprava, Goa. Interiors"
      para2= "FADD Studio Home vIlla"
      featured= "Featured in Vogue magazine, Feb 2023"/>
      <div className='intro-two-div'>
        <h1 className='intro-two-head'>We blend computer-aided design with craftsmanship and the end result is a tailor-made custom tile which will last for generations.
          Already 100 years and counting...</h1>
        <img src={years} alt="100 years" className='years-img' />
      </div>
      <OneLine
        textOne='4899 projects'
        textTwo='+3 million tiles placed'
        textThree='100 years, 7 months, 6 days, 12 hours and 13 minutes' />
    </section>

  )
}

export default IntroTwo