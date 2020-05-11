import React, { Component } from 'react'
import logo from "./../../images/logowhite.png"
import { Navbar, Nav, NavItem} from "react-bootstrap"
import  "./navbar.css"
import { LinkContainer } from "react-router-bootstrap";
import {withRouter} from "react-router"
import PropTypes from "prop-types";



export class NavigationBar extends Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      };

    componentDidMount(){
            if(this.props.location.pathname === "/"){
                this.transparentNav()
            }
    }

    transparentNav = () => {
        window.onscroll = function() {
            var nav = document.getElementById('navstyle');
            if ( window.pageYOffset > 100 ) {
                nav.classList.add("navColored")
            } else {
                nav.classList.remove("navColored")
            }
        }
    } 
 
    render() {
        return (
            <Navbar fixed="top" className="bg-dark" id="navstyle" style={navbarStyle} expand="lg" bg="dark" variant="dark">
        
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="mr-auto text-center" id="basic-navbar-nav">
        <div className="container">
        <Navbar.Brand><img height="100" alt="Company Logo" src={logo}></img></Navbar.Brand>
        <Nav className="ml-auto">

        <LinkContainer exact to="/">
            <Nav.Link >Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/about">
            <Nav.Link >About</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/services">
            <Nav.Link>Services</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/projects">
            <Nav.Link >Projects</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/news">
            <Nav.Link  >News</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/contact">
            <Nav.Link >Contact</Nav.Link>
        </LinkContainer>
        </Nav>
        </div>
        </Navbar.Collapse>
       
       </Navbar>
        )
    }
}




const navbarStyle = {
    fontSize: "20px",
    zIndex: "1200 !important",
    width: "100%"
}

export default withRouter(NavigationBar);
