import React from 'react';
import './manufacturing.css';
import OneLine from '../common component/one-line-text/OneLine';
import ManufactureProcess from './ManufactureProcess';

const Manufacturing = () => {
    return (
        <section className='manufac-sec'>
            <OneLine
                textOne='6 steps'
                textTwo='4 hours'
                textThree='Handmade'
                color="#F6F5EC" />
            <h1 className='manufac-head'>Manufacturing <br /> process</h1>
            <div className='manufac-head-text'>
                <p className='man-head-para'>Output is a beautiful tile that lasts forever. <br />
                    Over the decades Bharat has laid some of the best-known floors in India’s landmark buildings: from palaces of Maharajas and Raj Bhavans to prominent residences, hotels, hospitals, clubs, offices, factories, co-operative housing societies, educational and religious institutions, airports, railways etc.</p>
                <p className='man-head-para'>Each step has to be done well. <br />
                    The best European technologies were brought and modified to create a unique product suited to Indian conditions. Recognising that a good floor is only achieved with a good product that is installed correctly and maintained properly, the company has sister companies which do high quality installation of all types of floorings, a range of civil work, floor maintenance and general cleaning.</p>
            </div>
            <ManufactureProcess />
        </section>
    )
}

export default Manufacturing;