import React from 'react';
import './manufacturing.css';
import {data} from './data';

const MobileManufacturing = () => {
  return (
    <div className='mobile-manuf-sec'>
        {data.map((process) => (
            <div key={process.id} className='mobile-man-div'>
            <div className='mobile-no-name'>
                <h3 className='mobile-no'>{process.number}</h3>
                <span className='mobile-name'>{process.name}</span>
            </div>
            <p className='mobile-manu-para'>{process.para}</p>
            <div className='mobile-img-div'>
                <img src={process.image} alt={process.name} className='mobile-manu-img'/>
            </div>
        </div>
        ))}
    </div>
  )
}

export default MobileManufacturing;