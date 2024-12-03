import React from 'react';
import './oneline.css';

const OneLine = ({textOne, textTwo, textThree}) => {
  return (
    <div className='text-sec'>
        <span>{textOne}</span>
        <span>{textTwo}</span>
        <span>{textThree}</span>
    </div>
  )
}

export default OneLine;