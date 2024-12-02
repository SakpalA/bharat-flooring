import React from 'react';
import './navigation.css';
import image from '../../assets/images/image.png';
import logo from '../../assets/svgs/logo.svg';
import mobileLogo from '../../assets/svgs/mobile-logo.svg';
import SideBar from './SideBar';

const Navigation = () => {
  return (
    <nav>
      <img src={image} alt="black image" className='black-img'/>
      <img src={logo} alt="Logo" className='nav-logo' />
      <img src={mobileLogo} alt="Logo" className='nav-logo2' />
      <ul>
        <li>Products</li>
        <li>Services</li>
        <li>About</li>
        <li>Inspiratio</li>
      </ul>
      <SideBar />
    </nav>
  )
}

export default Navigation;