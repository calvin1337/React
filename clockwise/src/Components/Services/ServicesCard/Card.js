import React, { Component } from 'react'
import styles from "./carousel.module.css";
import { Card, Button } from "react-bootstrap";

export class ServicesCard extends Component {
   

    render() {
        return (
            <Card
      bg="dark"
      key="idx"
      text="black"
     
      style={{ width: '18rem', margin: "10px"}}
    >
      <Card.Img height="190px" width="285px" variant="top" src={this.props.image} />
      <Card.Body >
        <Card.Title style={{fontSize: "1rem"}}>{this.props.serviceTitle}</Card.Title>
        <Card.Text className="text-muted">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae error suscipit soluta explicabo autem libero.
        </Card.Text>
        <Button variant="secondary">Learn More</Button>
      </Card.Body>
    </Card>
        )
    }
}



export default ServicesCard
