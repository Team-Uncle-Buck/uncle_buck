import React, { Component } from "react";
import { Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';

//Class for the top navbar
class Navigation extends Component {

  render() {
    return (
      <Navbar className="body" bg="light" expand="lg">
        <Navbar.Brand href="/">Uncle Buck</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
