import React from "react";
import {Navbar,Nav} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap"
const Header = ()=>{
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <div className="container">
      <LinkContainer to="/">
      <Navbar.Brand >React-Bootstrap</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
        <LinkContainer to="/">
        <Nav.Link >Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/cart">       
        <Nav.Link>Cart</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/login">
        <Nav.Link >Login</Nav.Link>
        </LinkContainer>
        </Nav>
      </Navbar.Collapse>
      </div>
</Navbar>
    )
}


export default Header