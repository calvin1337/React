import React, { Component } from 'react'
import {Col, Row, Container} from "react-bootstrap";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faMap, faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";

export class Contact extends Component {
    render() {
        return (
        <div className="parallax">
            <div className="section-headline-white">
            <h2>Contact us</h2>
            </div>
        <Container>
            <Row>
                <Col md="4">
                    <div className="contactParallax">
                    <FontAwesomeIcon
                    icon={faMap}
                    color="#fff"
                    size="2x"
                    />
                    <h3>Address</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    </div>        
                </Col>
                <Col md="4">
                    <div className="contactParallax">
                    <FontAwesomeIcon
                    icon={faPhone}
                    color="#fff"
                    size="2x"
                     />
                    <h3>Phone Number</h3>
                    <p>Lorem, ipsum.</p>
                    </div>
               
                </Col>
                <Col md="4">
                    <div className="contactParallax">
                    <FontAwesomeIcon
                    icon={faEnvelope}
                    color="#fff"
                    size="2x"
                    />
                    <h3>Email</h3>
                    <p>Lorem, ipsum.</p>
                    </div>
                
                </Col>
            </Row>
        </Container>
        </div>
        )
    }
}

export default Contact
