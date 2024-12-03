import React from 'react';
import './footer.css';
import ColorPalette from './ColorPalette';
import logo from '../../assets/svgs/footer-logo.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <ColorPalette />
            <img src={logo} alt="" className='footer-logo'/>
            <div className='footer-links'>
                <ul>
                    <li>about us</li>
                    <li>history</li>
                    <li>management</li>
                    <li>quality policies</li>
                </ul>
                <ul>
                    <li>corporate videos</li>
                    <li>sitemap</li>
                    <li>all collections</li>
                    <li>manufacturing process</li>
                </ul>
                <ul>
                    <li>maintenance</li>
                    <li>colour chart</li>
                    <li>faq</li>
                    <li>order sample</li>
                </ul>
                <ul>
                    <li>floor design</li>
                    <li>new tile design</li>
                    <li>civil contracting</li>
                    <li>mission and vision</li>
                </ul>
                <ul>
                    <li>values & philosophy</li>
                    <li>press and media</li>
                    <li>events and promotions</li>
                    <li>careers</li>
                </ul>
                <ul>
                    <li>awards</li>
                    <li>client list</li>
                    <li>testimonial</li>
                    <li>contact us</li>
                    <li>download</li>
                    <li>resourses</li>
                </ul>
            </div>
            <div className='copyright-div'>
                <span>Copyright - Bharat Flooring and Tiles © 2024. </span>
                <span>All images and text are copyrighted unless otherwise specified.</span>
            </div>
        </footer>
    )
}

export default Footer;