import React from 'react';
import './product.css';
import hover1 from '../../assets/images/hover1.png';
import hover2 from '../../assets/images/hover2.png';
import hover3 from '../../assets/images/hover3.png';
import hover4 from '../../assets/images/hover4.png';

const HoverProduct = () => {
    return (
        <div className='hover-product'>
            <span className='hover-span'>30 colors</span><span className='sproduct-span'>30 colors</span>
            <h4 className='hover-head'>Designer tiles</h4>
            <div className='hover-img-div'>
                <img src={hover2} alt="Hover image" className='hover-img' />
                <img src={hover3} alt="Hover image" className='hover-img' />
                <img src={hover4} alt="Hover image" className='hover-img' />
                <img src={hover1} alt="Hover image" className='hover-img' />
            </div>
            <p className='hover-text'>From exquisite handcrafted cement tiles that bring timeless beauty to your space, to elegant terrazzo floors that exude grandeur, our collection of decorative concrete, outdoor floors, micro cement overlays, wallpapers, bespoke products, and more, offers limitless design possibilities. Let your imagination soar as you discover the perfect flooring solution that transforms ordinary spaces into extraordinary works of art.
            </p>
        </div>
    )
}

export default HoverProduct;