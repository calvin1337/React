import React, { Component } from 'react';
import {Col, Row, Container} from "react-bootstrap";

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
                </Container>
            </section>
        )
    }
}

export default Clients
