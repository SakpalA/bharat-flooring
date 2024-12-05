import React from 'react';
import './product.css';
import OneLine from '../common component/one-line-text/OneLine';
import { FaArrowRight } from "react-icons/fa6";
import SingleProduct from './SingleProduct';
import HoverProduct from './HoverProduct';

const Product = () => {
    return (
        <section className='product-sec'>
            <div className='product-div'>
                <OneLine
                    textOne='69 products'
                    textTwo='30 colors'
                    textThree='100 years' />
                <div className='product-sec-div'>
                    <h1 className='product-sec-head'>Products</h1>
                    <p className='product-sec-text'>From exquisite handcrafted cement tiles that bring timeless beauty to your space, to elegant terrazzo floors that exude grandeur, our collection of decorative concrete, outdoor floors, micro cement overlays, wallpapers, bespoke products, and more, offers limitless design possibilities. Let your imagination soar as you discover the perfect flooring solution that transforms ordinary spaces into extraordinary works of art.
                    </p>
                    <p className='product-view'>View all products <FaArrowRight className='product-view-arrow' /></p>
                </div>
            </div>
            <SingleProduct />
        </section>
    )
}

export default Product;