import React from 'react'
import { useState } from 'react';
import { 
  Button, 
  Offcanvas,
  Nav,
} from 'react-bootstrap';
import { BsList } from "react-icons/bs";

function Menu(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className='btn btn-nav'>
        <BsList/>
      </Button>

      <Offcanvas 
        show={show} 
        onHide={handleClose}
      >

        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="header page-header menu-header">Tarot Reading</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Nav className="justify-content-center flex-grow-1 pe-3">
            <Nav.Link className="menu-link" href="/">&nbsp; Home</Nav.Link>
            <Nav.Link className="menu-link" href="#action2">&nbsp; About</Nav.Link>
            <Nav.Link className="menu-link" href="#action2">&nbsp; Instructions</Nav.Link>
          </Nav>
        </Offcanvas.Body>

      </Offcanvas>
    </>
  );
}

export default Menu
