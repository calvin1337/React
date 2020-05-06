import React from 'react'
import logo from "./../../images/logo2.png"
import { Navbar, Nav, NavItem, NavLink} from "react-bootstrap"

function NavigationBar() {
    return (
       <Navbar style={navbarStyle} expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Brand href="#home"><img height="100" src={logo}></img></Navbar.Brand>
        <Nav className="ml-auto">

        <NavItem>
            <NavLink>Home</NavLink>
        </NavItem>
        <NavItem>
            <NavLink>About</NavLink>
        </NavItem>
        <NavItem>
            <NavLink>Services</NavLink>
        </NavItem>
        <NavItem>
            <NavLink>Projects</NavLink>
        </NavItem>
        <NavItem>
            <NavLink>News</NavLink>
        </NavItem>
        <NavItem>
            <NavLink>Contact</NavLink>
        </NavItem>
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
