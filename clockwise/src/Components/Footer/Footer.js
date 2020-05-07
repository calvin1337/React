import React from 'react'
import { Row, Container, Col } from "react-bootstrap";
import "./footer.css"

function Footer() {
    return (
        <footer>
            <div className="footer-middle">
            <Container>
              <Row>
                <Col md="3" sm="6">
                    <div class="footer-pad">
                        <h4 class="footertitle">CLOCKWISE</h4>
                        <ul class="list-unstyled">
                            <li><a href="#"></a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="privacy.html">Privacy</a></li>
                            <li><a href="contact.html">Get in touch</a></li>
                        </ul>
                    </div>
                </Col>

                <Col md="3" sm="6">
                    <div class="footer-pad">
                      <h4 class="footertitle">SERVICES</h4>
                        <ul class="list-unstyled">
                          <li><a href="services/engineering.html">Design & Engineering</a></li>
                          <li><a href="services/fabrication.html">Fabrication</a></li>
                          <li><a href="services/alwelding.html">Aluminium Welding</a></li>
                          <li><a href="services/exoticwelding.html">Stainless Steels and Exotic Material Welding</a></li>
                          <li><a href="services/machining.html">Machining</a></li>
                          <li><a href="services/wjcutting.html">Water-jet Cutting and Profiling</a></li>
                          <li><a href="services/piping.html">Hydraulics and Piping</a></li>
                          <li><a href="services/rental.html">Rental Services</a></li>
                         <li><a href="services/assembly.html">Assembly and Testing</a></li>
                        </ul>
                    </div>
                </Col>
                <Col md="3" sm="6">
                    <div class="footer-pad">
                        <h4 class="footertitle">NEWS</h4>
                            <ul class="list-unstyled">
                                <li><a href="#">New Service- Offshore</a></li>
                                <li><a href="#">News Article One</a></li>
                                <li><a href="#">News Article Two</a></li>
                                <li><a href="#">News Article Three</a></li>
                            </ul>
                    </div>
                </Col>
                <Col md="3">
                    <h4 class="footertitle">CLOCKWISE TECHNOLOGIES LTD</h4>
                      <ul class="address">
                         <li>Unit 1A, Gourdieburn</li>
                         <li>Potterton, AB23 8UY</li>
                         <li>01234 567890</li>
                         <li>info@clockwise-tech.com</li>
                    </ul>
                        <img src="images/logowhite.png"></img>

                </Col>
              </Row>
            </Container>
            </div>
        </footer>
    )
}




export default Footer
