import React from 'react';
import './intro-one.css';
import play from '../../assets/svgs/play.svg';

const IntroOne = () => {
  return (
    <section className='intro-one-sec'>
        <div className='intro-one-content'>
            <h1 className='intro-one-head'>Bharat Flooring and Tiles</h1>
            <p className='intro-one-para1'>For over a century, Bharat Floorings & Tiles has been the epitome of quality in handmade tile manufacturers in India.</p>
            <p className='intro-one-para2'>Our dedicated commitment to innovation ensures you're choosing the best handcrafted cement tiles in the market. Heritage buildings and prestigious locations across the country boast Bharat Floorings & Tiles that have maintained their original charm despite decades of heavy use - a testament to our quality, durability and handmade tiles texture.</p>
        </div>
        <div className='intro-one-img'>
            <div className='intro-img'></div>
            <img src={play} alt="play" className='play-svg'/>
            <span className='intro-one-span'>A century year old technique which is still relevant</span>
        </div>
    </section>
  )
}

export default IntroOne;