import React, { Fragment } from 'react';
import '../Css/Portfolio.css';
import { NavLink } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

const PortfolioNav = () => {
  return (
    <Fragment>
      <div className='Content-Nav'>
        <ul className='nav'>
          <li className='nav-item'>
            <NavLink exact to='/' className='nav-link '>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/Github' className='nav-link '>
              Github
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/Projects' className='nav-link'>
              Projects
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/Skills' className='nav-link'>
              Skills
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/Contact' className='nav-link'>
              Contact
            </NavLink>
          </li>
          <NavDropdown title='Languages' id='basic-nav-dropdown'>
            <NavDropdown.Item>Hebrew</NavDropdown.Item>

            <NavDropdown.Item>English</NavDropdown.Item>
          </NavDropdown>
        </ul>
      </div>
    </Fragment>
  );
};
export default PortfolioNav;
