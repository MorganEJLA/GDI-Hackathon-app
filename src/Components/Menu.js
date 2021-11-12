import React from 'react'
import { useState } from 'react';
import { Offcanvas, } from 'react-bootstrap';

function Menu(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div variant="primary" onClick={handleShow}>
        hamburger.click
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          ...this is where we will put our menu items and links to other pages...
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Menu
