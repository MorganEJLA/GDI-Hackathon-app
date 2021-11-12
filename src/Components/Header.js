import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import Menu from './Menu';


function Header( props ){

    return (
      <Navbar>
        <Navbar.Brand style={{marginRight:"auto", marginLeft:"10%"}}>
          <span className="header page-header">Tarot Reading</span>
        </Navbar.Brand>
        <Navbar.Brand style={{marginLeft:"auto"}}>
          <Menu/>
        </Navbar.Brand>
      </Navbar>
    )
} 
 
export default Header;