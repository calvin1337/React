import React, { Component } from 'react';
import  "./modal.css";

export class Modal extends Component {
    render() {
        let display = true;
        if(this.props.display === true){
            display = {
                display: "block"
            }
        } else if (this.props.display === false){
            display = {
                display: "none"
            }
        }

        return (
            <div className="modal" onClick={this.props.onClick} style={display} >
                <div className="modalBox">

                </div>
            </div>
        )
    }
}


export default Modal
