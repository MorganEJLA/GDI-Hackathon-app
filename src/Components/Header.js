import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Menu from './Menu';

function Header( props ){

    return (
      <Navbar className="navbar">
        <Nav.Item>
          <Nav.Item>Tarot</Nav.Item>
          <Nav.Item className="justify-content-end">
              <Menu/>
          </Nav.Item>
        </Nav.Item>
      </Navbar>
    )
} 
 
export default Header;