import React from 'react'
import { useState } from 'react';
import { 
  Button, 
  Offcanvas,
  Accordion,
  Nav
} from 'react-bootstrap';
import { BsList } from "react-icons/bs";
import About from './pages/About'
import Instructions from './pages/Instructions'


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
          <Offcanvas.Title className="header page-header menu-header"><Nav.Link style={{color:"black"}} href="/">Tarot Reading</Nav.Link></Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          

          <Accordion flush>

            <Accordion.Item eventKey="0">
              <Accordion.Header><Nav.Link style={{color:"black"}}>About</Nav.Link></Accordion.Header>
              <Accordion.Body>
                <About/>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header ><Nav.Link style={{color:"black"}}>Instructions</Nav.Link></Accordion.Header>
              <Accordion.Body>
                <Instructions/>
              </Accordion.Body>
            </Accordion.Item>

          </Accordion>

        </Offcanvas.Body>

      </Offcanvas>
    </>
  );
}

export default Menu
