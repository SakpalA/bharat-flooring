import React from 'react';
import './oneline.css';

const OneLine = ({textOne, textTwo, textThree}) => {
  return (
    <section className='text-sec'>
        <span>{textOne}</span>
        <span>{textTwo}</span>
        <span>{textThree}</span>
    </section>
  )
}

export default OneLine;