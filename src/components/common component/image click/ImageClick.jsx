import React, { useState } from 'react';
import './image-click.css';
import image1 from '../../../assets/images/image1.jpeg';
import image2 from '../../../assets/images/image2.jpeg';
import image3 from '../../../assets/images/image3.jpeg';

const ImageClick = () => {
    const [currentImage, setCurrentImage] = useState(image1);

    return (
        <section className='img-click-sec'>
            <div className='main-img'>
                <img src={currentImage} alt="" className='current-img' />
            </div>
            <div className='all-img'>
                <div className='img-div'>
                    <img src={image1}
                        alt="Bathroom"
                        className='img'
                        onClick={() => setCurrentImage(image1)} />
                </div>

                <div className="img-div">
                    <img src={image2}
                        alt="Table"
                        className='img'
                        onClick={() => setCurrentImage(image2)} />
                </div>

                <div className="img-div">
                    <img src={image3}
                        alt="Bedroom"
                        className='img'
                        onClick={() => setCurrentImage(image3)} />
                </div>

            </div>
        </section>
    )
}

export default ImageClick;