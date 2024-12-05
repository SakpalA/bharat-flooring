import React from 'react';
import './workbench.css';
import { FaArrowRight } from "react-icons/fa6";

const WbOneLine = () => {
    const colors = ['#236A9A', '#DF998F', '#5BA9C9', '#FFFFFF', '#B64357'];
  return (
    <div className='wb-one-line'>
        <div className='color-div'>
            {colors.map((color, index) => (
                <div key={index} style={{ backgroundColor: color}} className='single-color'></div>
            ))}
        </div>
        <span className='wb-one-span'>Change tile</span>
        <p className='wb-one-para'>Continue in Workshop <FaArrowRight className='wb-one-arrow'/></p>
    </div>
  )
}

export default WbOneLine;