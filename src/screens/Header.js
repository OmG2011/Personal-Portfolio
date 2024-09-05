import React, { useEffect, useState } from 'react';
import '../styles/Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/Logo.png';

function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update the time every second

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <Navbar expand="lg" className="main_div bg-dark">
      <Container>
        <Navbar.Brand href="/Personal-Portfolio" className='d-flex align-items-center'>
          <img src={Logo} alt="Logo" className='logo me-3' style={{ width: '50px' }} />
          <span className='text-white' style={{ fontSize: '24px' }}>Personal Website</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/Personal-Portfolio" className='text-white'>Home</Nav.Link>
            <Nav.Link href="/Personal-Portfolio/cv" className='text-white'>Portfolio / Projects</Nav.Link>
            <Nav.Link className='text-white'>{currentTime.toLocaleTimeString()}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
