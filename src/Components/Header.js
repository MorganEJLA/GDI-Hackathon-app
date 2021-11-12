import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Menu from './Menu';

function Header( props ){

    return (
      <Navbar className="navbar">
        <Nav.Item>
          <Nav.Item>Tarot</Nav.Item>
          <Navbar.Text>
            <Menu/>
          </Navbar.Text>
        </Nav.Item>
      </Navbar>
    )
} 
 
export default Header;