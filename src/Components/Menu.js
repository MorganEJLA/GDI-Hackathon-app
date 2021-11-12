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
      <Button onClick={handleShow}>
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
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action2">Instructions</Nav.Link>
          </Nav>
        </Offcanvas.Body>

      </Offcanvas>
    </>
  );
}

export default Menu
