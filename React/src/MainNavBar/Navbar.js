import React from 'react';
import logo from '../images/logo.png';
import { Nav, Navbar, Button, Container } from 'react-bootstrap';

function MainNavbar() {
  return (
   <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src={logo}
        width="50"
        height="50"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>
    <Navbar.Brand href="#home">Spectre</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#popular">Popular</Nav.Link>
      <Nav.Link href="#poster">Poster</Nav.Link>
    </Nav>
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        <a href="#login">Mark Otto</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default MainNavbar;
