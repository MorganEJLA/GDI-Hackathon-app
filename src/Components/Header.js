import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Menu from './Menu';

function Header( props ){

    return (
      <Navbar className="navbar">
        <Nav.Item>
          <Nav.Link href="/">Tarot Reading</Nav.Link>
          <Nav.Item className="justify-content-end">
              <Menu/>
          </Nav.Item>
          <Menu/>
        </Nav.Item>
      </Navbar>
    )
}
 
export default Header;