import React from 'react';
import './oneline.css';

const OneLine = ({textOne, textTwo, textThree, color}) => {
  return (
    <div className='text-sec' style={{color: color}}>
        <span>{textOne}</span>
        <span>{textTwo}</span>
        <span>{textThree}</span>
    </div>
  )
}

export default OneLine;