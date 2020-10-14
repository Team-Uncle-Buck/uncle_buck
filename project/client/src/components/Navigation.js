import React, { Component } from "react";
import {useState} from "react";
import { Nav, Navbar, NavDropdown, NavItem, Dropdown } from 'react-bootstrap';
import './Navigation.css';
import {Container} from "react-bootstrap";

//Class for the top navbar
class Navigation extends Component {

  
  
    constructor(props){super(props);
      this.state = { backgroundcolor: "white", colorz: '#666666',  dropdownOpen: true };
   
    }

    
    
  render() {
    return (

      <Navbar style={{backgroundColor: this.state.backgroundcolor}} expand="lg" >
        <Navbar >
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
          <Nav className="ml-auto title">

            <Nav.Link style={{color: this.state.colorz}} href="/">Calculator</Nav.Link>
            <Nav.Link style={{color: this.state.colorz}} href="/About">About</Nav.Link>
            {/* Theme Song */}
            <Nav.Link style={{color: this.state.colorz}} href="/SongPage">Song</Nav.Link> 
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"></script><script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script><link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" rel="stylesheet"/><link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>

            <div class="dropdown">
            <button type="button" class="btn" display="inline-block" data-toggle="dropdown" border="None" style={{color: this.state.colorz, backgroundColor: this.state.backgroundcolor}}><p>
              Choose a Nav Bar Theme! </p>
            <i class="fa fa-angle-down"></i>
            </button>
            <div class="dropdown-menu">
                <NavDropdown.Item as="button" id="light_display" onClick={() => this.setState({ backgroundcolor: 'white', colorz:'#666666'})}>Light</NavDropdown.Item>
                <NavDropdown.Item as="button" id="dark_display" onClick={() => this.setState({ backgroundcolor: 'black', colorz: 'white'})}>Dark</NavDropdown.Item>
                <NavDropdown.Item as="button" id="money_display"onClick={() => this.setState({ backgroundcolor: '#85bb65', colorz: '#065C27' })}>Money</NavDropdown.Item>
                <NavDropdown.Item as="button" id="gold_display" onClick={() => this.setState({ backgroundcolor: ' rgba(218,165,32, .9)', colorz: 'rgba(255, 215, 0, 1)' })}>Gold</NavDropdown.Item>
                <NavDropdown.Item as="button" id="royal_display" onClick={() => this.setState({ backgroundcolor: 'rgba(61,0, 91, .9)', colorz:'rgba(209, 178, 224, 1)' })}>Royalty</NavDropdown.Item>
                <NavDropdown.Item as="button" id="silver_display" onClick={() => this.setState({ backgroundcolor: '#9fa4a7', colorz: '#eeeeef' })}>Silver</NavDropdown.Item>
                <NavDropdown.Item as="button" id="ruby_display" onClick={() => this.setState({ backgroundcolor: 'rgb(220, 88, 117)', colorz: 'rgb(103, 26, 26'})}>Ruby</NavDropdown.Item>
                <NavDropdown.Item as="button" id="blue_display" onClick={() => this.setState({ backgroundcolor: 'rgba(25,68,121,1)', colorz: 'rgba(152, 193, 220, .8)' })}>Blue Diamond</NavDropdown.Item>
                <NavDropdown.Item as="button" id="emerald_display" onClick={() => this.setState({ backgroundcolor: 'rgba(23,43,57, 1)', colorz: 'rgba(26, 177, 136, .7)' })}>Emerald</NavDropdown.Item>
                <NavDropdown.Item as="button" id="pink_display" onClick={() => this.setState({ backgroundcolor: 'rgba(195,196,196, .7)', colorz: 'rgba(209, 109, 139, 1)' })}>Perfect Pink</NavDropdown.Item>
              </div>
              </div>


          </Nav>
        </Navbar.Collapse>
      </Navbar>
  
    );
  }
}

export default Navigation;