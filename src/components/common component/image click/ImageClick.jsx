import React, { useState } from 'react';
import './image-click.css';

const ImageClick = ({image1, image2, image3}) => {
    const [currentImage, setCurrentImage] = useState(image1);

    return (
        <section className='img-click-sec'>
            <div className='main-img'>
                <img src={currentImage} alt="" className='current-img' />
            </div>
            <div className='all-img'>
                <div className={`img-div ${currentImage === image1 ? "active" : ""}`}>
                    <img src={image1}
                        alt="Bathroom"
                        className={`img ${currentImage === image1 ? 'zoom' : ''}`}
                        onClick={() => setCurrentImage(image1)} />
                </div>

                <div className={`img-div ${currentImage === image2 ? "active" : ""}`}>
                    <img src={image2}
                        alt="Table"
                        className={`img ${currentImage === image2 ? 'zoom' : ''}`}
                        onClick={() => setCurrentImage(image2)} />
                </div>

                <div className={`img-div ${currentImage === image3 ? "active" : ""}`}>
                    <img src={image3}
                        alt="Bedroom"
                        className={`img ${currentImage === image3 ? 'zoom' : ''}`}
                        onClick={() => setCurrentImage(image3)} />
                </div>

            </div>
        </section>
    )
}

export default ImageClick;