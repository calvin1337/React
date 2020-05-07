import React from 'react'
import { Row, Container, Col } from "react-bootstrap";
import Logo from "../../images/logowhite.png"
import "./footer.css"

function Footer() {
    return (
        <footer>
            <div className="footer-middle">
            <Container>
              <Row>
                <Col md="3" sm="6">
                    <div className="footer-pad">
                        <h4 className="footertitle">CLOCKWISE</h4>
                        <ul className="list-unstyled">
                            <li><a href="#"></a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="privacy.html">Privacy</a></li>
                            <li><a href="contact.html">Get in touch</a></li>
                        </ul>
                    </div>
                </Col>

                <Col md="3" sm="6">
                    <div className="footer-pad">
                      <h4 className="footertitle">SERVICES</h4>
                        <ul className="list-unstyled">
                          <li><a href="services/engineering.html">Design & Engineering</a></li>
                          <li><a href="services/fabrication.html">Fabrication</a></li>
                          <li><a href="services/alwelding.html">Aluminium Welding</a></li>
                          <li><a href="services/exoticwelding.html">Stainless Steels & Exotic Material Welding</a></li>
                          <li><a href="services/machining.html">Machining</a></li>
                          <li><a href="services/wjcutting.html">Water-jet Cutting & Profiling</a></li>
                          <li><a href="services/piping.html">Hydraulics & Piping</a></li>
                          <li><a href="services/rental.html">Rental Services</a></li>
                         <li><a href="services/assembly.html">Assembly & Testing</a></li>
                        </ul>
                    </div>
                </Col>
                <Col md="3" sm="6">
                    <div className="footer-pad">
                        <h4 className="footertitle">NEWS</h4>
                            <ul className="list-unstyled">
                                <li><a href="#">New Service- Offshore</a></li>
                                <li><a href="#">News Article One</a></li>
                                <li><a href="#">News Article Two</a></li>
                                <li><a href="#">News Article Three</a></li>
                            </ul>
                    </div>
                </Col>
                <Col md="3">
                    <h4 className="footertitle">CLOCKWISE TECHNOLOGIES LTD</h4>
                      <ul className="address">
                         <li>Unit 1A, Gourdieburn</li>
                         <li>Potterton, AB23 8UY</li>
                         <li>01234 567890</li>
                         <li>info@clockwise-tech.com</li>
                    </ul>
                        <img alt="company logo" src={Logo}></img>

                </Col>
              </Row>
              <Row>
                <Col md="12">
                    <div class="copy">
                    <p class="text-center">&copy; Clockwise Technologies 2020. All rights reserved. SC520113</p>
                    </div>
                 </Col>
              </Row>
            </Container>
            </div>
        </footer>
    )
}




export default Footer
