import React from 'react';
import { Nav, Navbar, Container, NavDropdown, NavLink } from 'react-bootstrap';
import Logo from './../../Assets/logo.png';
import './Navs.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'

function Navs() {

    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }


    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Link to="/"><img src={Logo} title='logo' /></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Nav className="me-auto">
                            <Link className='active' to="/">Home</Link>
                            <NavDropdown title="Pages" id="basic-nav-dropdown">
                                <Link to="/about">About Us</Link>
                                <Link to="/team">Our Team</Link>
                                <Link to="/faq">FAQ's</Link>
                                <Link to="/booking">Booking</Link>
                                <Link to="/login">Login / Register</Link>
                            </NavDropdown>
                            <Link to="/service">Service</Link>
                            <Link to="/blog">Blogs</Link>
                            <Button className='search' onClick={handleShow}><i class="fa-solid fa-magnifying-glass"></i></Button>
                            <Link to="/contact" className='btn'><button>Contact Us <i class="fa-solid fa-angle-right"></i></button></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body className='row justify-content-center'>
                    <div className='col-lg-10'>
                        <form>
                            <input type='search' placeholder='Type To Search' />
                            <button className='sea'><i class="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>


        </>
    )
}

export default Navs
