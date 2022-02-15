import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Sidebar from '../Sidebar/Sidebar';

import './NavbarTop.css';

const NavbarTop = ({ cart, setCart }) => {
  return (
    <Navbar className="navbar" sticky="top">
      <Container className="container">
        <Navbar.Brand href="#home">
          Games
          <span
            style={{ color: 'red', fontWeight: 'bold', fontSize: '1.4rem' }}
          >
            XS
          </span>
          tore
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Sidebar cart={cart} setCart={setCart} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarTop;
