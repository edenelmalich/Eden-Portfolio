import React from 'react';
import '../Css/Mobile.css';
import { Navbar, Nav } from 'react-bootstrap';
// Redux
import { connect } from 'react-redux';
import { CheckNavbar } from '../action/NavAction';
const NavbarMobile = ({ checkNavbar, CheckNav }) => {
  return (
    <div className='NavMobile'>
      <Navbar onClick={() => checkNavbar(!CheckNav)} bg='light' expand='lg'>
        <Navbar.Brand href='/'>Eden Elmalich</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/Github'>Github</Nav.Link>
            <Nav.Link href='/Projects'>Projects</Nav.Link>
            <Nav.Link href='/Skills'>Skills</Nav.Link>
            <Nav.Link href='/Contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    CheckNav: state.NavReducer.CheckNav
  };
};
const mapDispatchToProps = dispatch => {
  return {
    checkNavbar: boolean => {
      dispatch(CheckNavbar(boolean));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarMobile);
