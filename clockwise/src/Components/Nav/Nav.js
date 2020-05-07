import React from 'react'
import logo from "./../../images/logowhite.png"
import { Navbar, Nav, NavItem,} from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap";

function NavigationBar() {
    return (
       <Navbar style={navbarStyle} expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="mr-auto text-center" id="basic-navbar-nav">
        <Navbar.Brand ><img height="100" alt="Company Logo" src={logo}></img></Navbar.Brand>
        <Nav className="ml-auto">

        <LinkContainer exact to="/">
        <NavItem>
            <Nav.Link >Home</Nav.Link>
        </NavItem>
        </LinkContainer>
        <LinkContainer to="/about">
        <NavItem>
            <Nav.Link >About</Nav.Link>
        </NavItem>
        </LinkContainer>
        <LinkContainer to="/services">
        <NavItem>
            <Nav.Link>Services</Nav.Link>
        </NavItem>
        </LinkContainer>
        <LinkContainer to="/projects">
        <NavItem>
            <Nav.Link >Projects</Nav.Link>
        </NavItem>
        </LinkContainer>
        <LinkContainer to="/news">
        <NavItem>
            <Nav.Link  >News</Nav.Link>
        </NavItem>
        </LinkContainer>
        <LinkContainer to="/contact">
        <NavItem>
            <Nav.Link >Contact</Nav.Link>
        </NavItem>
        </LinkContainer>
        </Nav>
        </Navbar.Collapse>
       </Navbar>
    )
}

const navbarStyle = {
    fontSize: "20px",
    zIndex: "1200 !important",
    backgroundColor:"#212529 !important"
    
}

export default NavigationBar
