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
                            <h2>Who Are Clockwise Technologies</h2>
                        </div>
                    </Col>
                    <Col md="6">
                        <h1>Testing</h1>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

const sections = {
    height: "500px",
    padding:"100px"
}


export default AboutIntro

