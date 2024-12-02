import React, { useState } from 'react';
import './navigation.css';
import logo from '../../assets/svgs/logo.svg';
import menu from '../../assets/svgs/menu.svg';
import Offcanvas from 'react-bootstrap/Offcanvas';

const SideBar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(s => !s);
    return (
        <>
            <img src={menu} alt="menu button"
                className='nav-menu'
                onClick={handleShow} />
            <Offcanvas show={show} onHide={handleClose} placement='end' backdrop={true} scroll={false}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <img src={logo} alt="" />
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className='side-ul'>
                        <li>Products</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Inspiration</li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default SideBar;