import React, { Component } from 'react'
import "./Modal.css";
export class Modal extends Component {


    render() {
        
        let displayModal = {
    display: "none"
        }     

    if(this.props.showModal === true){
    displayModal = {
        display: "block"
    } 
    }  else displayModal = {
        display: "none"
    }   
    

    let modalContainer = document.getElementsByClassName("modal-container")



  
        return (
            <div style={displayModal} className="modal-container">
            <div className="modal">
                <h1>Hello</h1>
            </div>  

        </div>
        )
    }
}

export default Modal
