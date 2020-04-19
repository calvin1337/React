import React, { Component } from 'react'
import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

export class Modal extends Component {
    render() {

       
        return (
            <React.Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}>
                    <div className="Modal"
                    style={{
                        transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
                        opacity: this.props.show ? "1" : 0 
                    }}>

                    </div>

                </Backdrop>
            </React.Fragment>
        )
    }
}

export default Modal
