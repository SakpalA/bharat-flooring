import React from 'react';
import './workbench.css';
import image from '../../assets/images/image8.png';
import tile from '../../assets/images/image7.png';
import { FaArrowRight } from "react-icons/fa6";
import WbOneLine from './WbOneLine';

const Workbench = () => {
    return (
        <section className='workbench-sec'>
                <div className='workbench-text-div'>
                    <h1 className='workbench-head'>Workbench</h1>
                    <p className='workbench-text'>We encourage our customers to look at our designer tile collections, play with the colours and patterns, and come up with unique handmade tile selections.
                    </p>
                </div>

                <div className='workbench-div'>
                    <div className='workbench-img-div1'>
                        <img src={image} alt="house" className='wbhouse' />
                    </div>
                    <div className='workbench-img-div2'>
                        <div className='wb1'>
                            <p className='wb1-span'>Anulom (Type D)</p>
                            <p className='wb1-text'>Anulom is our stunning hexagonal rhythm 3D Tile Collection, where the artistry of design meets the allure of dimensionality, creating a mesmerizing visual experience for your spaces. </p>
                        </div>
                        <div className='wb2'>
                            <img src={tile} alt="Tile" className='wb-tile' />
                            <p className='wb2-text'>Continue on Workshop <FaArrowRight className='wb-arrow'/></p>
                        </div>
                        <div className='wb3'>
                            <div className='size wb3-size-div'>
                                <span className='wb3-span'>Size</span>
                                <span className='wb3-span'>20 cm x 20 cm</span>
                            </div>
                            <div className='thickness wb3-size-div'>
                                <span className='wb3-span'>Thickness</span>
                                <span className='wb3-span'>Flooring - 23mm - 25mm</span>
                                <span className='wb3-span'>Cladding - 16mm - 18mm</span>
                            </div>
                        </div>
                    </div>
                </div>
            <WbOneLine />
        </section>
    )
}

export default Workbench;