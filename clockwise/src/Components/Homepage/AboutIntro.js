import React from 'react'
import {Row, Col, Container} from "react-bootstrap"
import "./aboutIntro.css";

function AboutIntro() {
    return (
        <section style={sections}>
            <Container>
                <Row>
                    <Col md="6">
                    <div className="sectionTitle">
                        <span>About us</span>
                        <h2>Who are we</h2>
                    </div>
                    <div className="aboutInfo">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quod fugit eius. Placeat, nobis error culpa consequatur voluptatum earum voluptatem!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, delectus molestiae atque architecto ad explicabo quasi est! Eligendi numquam repellat error? Repellat ullam, nesciunt porro at sunt ut eius quod.
                        </p>
                    </div>
                        <button type="button" class="btn btn-outline-secondary">Find out more</button>
                    </Col>
                    <Col md="6">
                    <div className="img-container">
                     <img src="https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80" alt="" className="img img-responsive" />
                     <img src="https://images.unsplash.com/photo-1558611997-dd5b20e08c71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="" className="img img-responsive" />
                      <img src="http://themexriver.com/mega-industry/mega-industry/images/about-us/img-3.jpg" alt="" className="img img-responsive" />
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

const sections = {
    height: "auto",
    padding:"100px"
}

// http://themexriver.com/mega-industry/mega-industry/

export default AboutIntro

