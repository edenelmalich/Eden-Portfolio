import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarMobile = () => {
  // useState
  const [NavState, SetNavState] = useState(false);
  return (
    <div className='NavMobile'>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='/'>Eden Elmalich</Navbar.Brand>
        <Navbar.Toggle
          aria-controls='basic-navbar-nav'
          onClick={() => SetNavState(!NavState)}
        />
        <Navbar.Collapse in={NavState} id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Link onClick={() => SetNavState(false)} to='/'>
              Home
            </Link>
            <Link to='/Github' onClick={() => SetNavState(false)}>
              Github
            </Link>
            <Link to='/Projects' onClick={() => SetNavState(false)}>
              Projects
            </Link>
            <Link to='/Skills' onClick={() => SetNavState(false)}>
              Skills
            </Link>
            <Link to='/Contact' onClick={() => SetNavState(false)}>
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarMobile;
