import React, { useEffect, useState } from 'react';
import './small-tiles.css';
import tile1 from '../../../assets/images/tile1.png';
import tile2 from '../../../assets/images/tile2.png';
import tile3 from '../../../assets/images/tile3.png';
import { FaArrowRight } from "react-icons/fa6";

const SmallTiles = ({ para1, para2, featured, reverse = false }) => {

  return (
    <div className={`tile-sec ${reverse ? 'reverse' : ''}`}>
      <div className='tiles-text'>
        <div>
          <p className='tiles-para'>{para1}</p>
          <p className='tiles-para'>{para2}</p>
        </div>
        <span className='tiles-span'>{featured}</span>
        <div className='arrow-div'>
          <span className='arrow-span'>View project </span><FaArrowRight className='tiles-arrow' />
        </div>
      </div>
      <div className='tiles-img-div'>
        <div className= 'tiles-imgs'>
          <img src={tile1} alt="Tile" className='tile-img' />
          <img src={tile2} alt="Tile" className='tile-img' />
          <img src={tile3} alt="Tile" className='tile-img' />
        </div>
        <div className='arrow-div arrow-div2'>
          <span className='arrow-span'>View project </span><FaArrowRight className='tiles-arrow' />
        </div>
      </div>
    </div>
  )
}

export default SmallTiles;