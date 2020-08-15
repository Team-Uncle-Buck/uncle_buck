import React, { Component } from "react";
import {useState} from "react";
import { Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import './Navigation.css';


//Class for the top navbar
class Navigation extends Component {
  
    constructor(props){super(props);
      this.state = { backgroundcolor: "white", color: '#666666' };
    }
  render() {
    return (

      <Navbar style={{backgroundColor: this.state.backgroundcolor}} bg="light" expand="lg" variant="light">
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
            <Nav.Link style={{color: this.state.color}} href="/">Calculator</Nav.Link>
            <Nav.Link style={{color: this.state.color}} href="/About">About</Nav.Link>
            {/* Theme Song */}
            <Nav.Link href="/SongPage">Song</Nav.Link> 
            <NavDropdown title="Display Theme" id="basic-nav-dropdown" style={{fontcolor: this.state.color}}>
                <NavDropdown.Item as="button" id="light_display" onClick={() => this.setState({ backgroundcolor: 'white', color:'#666666'})}>Light</NavDropdown.Item>
                <NavDropdown.Item as="button" id="dark_display" onClick={() => this.setState({ backgroundcolor: 'black', color: 'white'})}>Dark</NavDropdown.Item>
                <NavDropdown.Item as="button" id="money_display"onClick={() => this.setState({ backgroundcolor: '#85bb65', color: '#065C27' })}>Money</NavDropdown.Item>
                <NavDropdown.Item as="button" id="gold_display" onClick={() => this.setState({ backgroundcolor: ' rgba(218,165,32, .9)', color: 'rgba(255, 215, 0, 1)' })}>Gold</NavDropdown.Item>
                <NavDropdown.Item as="button" id="royal_display" onClick={() => this.setState({ backgroundcolor: 'rgba(61,0, 91, .9)', color:'rgba(209, 178, 224, 1)' })}>Royalty</NavDropdown.Item>
                <NavDropdown.Item as="button" id="silver_display" onClick={() => this.setState({ backgroundcolor: '#9fa4a7', color: '#eeeeef' })}>Silver</NavDropdown.Item>
                <NavDropdown.Item as="button" id="ruby_display" onClick={() => this.setState({ backgroundcolor: 'rgb(220, 88, 117)', color: 'rgb(103, 26, 26'})}>Ruby</NavDropdown.Item>
                <NavDropdown.Item as="button" id="blue_display" onClick={() => this.setState({ backgroundcolor: 'rgba(25,68,121,1)', color: 'rgba(152, 193, 220, .8)' })}>Blue Diamond</NavDropdown.Item>
                <NavDropdown.Item as="button" id="emerald_display" onClick={() => this.setState({ backgroundcolor: 'rgba(23,43,57, 1)', color: 'rgba(26, 177, 136, .7)' })}>Emerald</NavDropdown.Item>
                <NavDropdown.Item as="button" id="pink_display" onClick={() => this.setState({ backgroundcolor: 'rgba(195,196,196, .7)', color: 'rgba(209, 109, 139, 1)' })}>Perfect Pink</NavDropdown.Item>
              </NavDropdown>


          </Nav>
        </Navbar.Collapse>
      </Navbar>
  
    );
  }
}

export default Navigation;
