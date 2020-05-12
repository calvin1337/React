import React, { Component } from 'react';
import {Col, Row, Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import Oceaneering from "../../images/Clients/oceaneering.png";
import subsea7 from "../../images/Clients/subsea7.png"

export class Clients extends Component {
    render() {
        return (
            <section style={{backgroundColor:"#e1e5ee"}}className="py-5">
                <Container>
                    <Row >
                        <Col lg="12">
                        
                            <h3 className="text-muted text-center">Some of our clients</h3>
                        
                        </Col>                   
                    </Row>
                    <Row>
                        <Col md="3" sm="6">
                            <Link to="/">
                                <img class="img-fluid d-block mx-auto" src={Oceaneering} alt="subsea 7 logo" />
                            </Link>
                        </Col>
                        <Col md="3" sm="6">
                            <Link to="/">
                                <img class="img-fluid d-block mx-auto" src={subsea7} alt="subsea 7 logo" />
                            </Link>
                        </Col>
                        <Col md="3" sm="6">
                            <Link to="/">
                                <img class="img-fluid d-block mx-auto" src={Oceaneering} alt="subsea 7 logo" />
                            </Link>
                        </Col>
                        <Col md="3" sm="6">
                            <Link to="/">
                                <img class="img-fluid d-block mx-auto" src={subsea7} alt="subsea 7 logo" />
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Clients
