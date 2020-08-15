import React, { Component } from "react";
import { Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';


//Class for the top navbar
class Navigation extends Component {

  render() {
    return (

      <Navbar bg="light" expand="lg" variant="light">
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/logo.png"
              height = "15%"
              weight = "15%"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Navbar>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Calculator</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  
    );
  }
}

export default Navigation;
