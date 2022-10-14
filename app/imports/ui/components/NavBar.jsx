import React from 'react';
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';

const NavBar = () => (
  <Navbar className="sticky-top bg-white justify-content-center">

    <Navbar.Brand id="logo">
      <Image width="100" src="./images/logo.png" alt="logo" />
    </Navbar.Brand>

    <Nav className="container-fluid">
      <NavDropdown title="ABOUT US">
        <NavDropdown.Item>Contact Us</NavDropdown.Item>
        <NavDropdown.Item>Our Story</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="MENU">
        <NavDropdown.Item href="#">Our Drinks</NavDropdown.Item>
        <NavDropdown.Item href="#">Our Macarons</NavDropdown.Item>
        <NavDropdown.Item href="#">Our Merchandise</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="EVENTS & FUNDRAISING">
        <NavDropdown.Item href="#">Events</NavDropdown.Item>
        <NavDropdown.Item href="#">Fundraising</NavDropdown.Item>
      </NavDropdown>

      <Nav.Link href="#">LOCATIONS</Nav.Link>

      <NavDropdown title="CAREERS">
        <NavDropdown.Item href="#">San Jose Hiring</NavDropdown.Item>
        <NavDropdown.Item href="#">San Bernardino County Hiring</NavDropdown.Item>
        <NavDropdown.Item href="#">Riverside County Hiring</NavDropdown.Item>
      </NavDropdown>

      <Nav.Item>
        <Nav.Link href="#">ARTISAN</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#">MOBILE APP</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#">FRANCHISE</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Search className="mt-2" />
      </Nav.Item>
    </Nav>
  </Navbar>
);

export default NavBar;
