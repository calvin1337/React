import React, { Component } from 'react'
import styles from "./carousel.module.css";
import { Card } from "react-bootstrap";

export class ServicesCard extends Component {
   

    render() {
        return (
            <Card
      bg="dark"
      key="idx"
      text="white"
      style={{ width: '18rem', margin: "10px"}}
    >
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Card Title </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        )
    }
}



export default ServicesCard
