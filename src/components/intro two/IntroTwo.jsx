import React from 'react';
import './intro-two.css';
import years from '../../assets/images/years.png';
import OneLine from '../common component/one-line-text/OneLine';

const IntroTwo = () => {
  return (
    <section className='intro-two-sec'>
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