import React from 'react';
import './intro-two.css';
import years from '../../assets/images/years.png';

const IntroTwo = () => {
  return (
    <section className='intro-two-sec'>
        <h1 className='intro-two-head'>We blend computer-aided design with craftsmanship and the end result is a tailor-made custom tile which will last for generations.
        Already 100 years and counting...</h1>
        <img src={years} alt="100 years" className='years-img'/>
    </section>
  )
}

export default IntroTwo