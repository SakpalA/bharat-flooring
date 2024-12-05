import React from 'react';
import { data } from './data';
import './product.css';
import { FaArrowRightLong } from "react-icons/fa6";
import HoverProduct from './HoverProduct';

const SingleProduct = () => {
    return (
        <div className='single-product-sec'>
            {data.map((product) => (
                <div key={product.id} className='single-product'>
                    <div className='sproduct-img-div'>
                        <img src={product.image} alt="Product image" className='sproduct-img' />
                        <HoverProduct />
                    </div>
                    <div className='sproduct-text-div'>
                        <h3 className='sproduct-name'>{product.name} <FaArrowRightLong className='sproduct-arrow' /></h3>
                        <span className='sproduct-span'>18 designs</span>
                        <span className='sproduct-span'>13 colors</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SingleProduct;