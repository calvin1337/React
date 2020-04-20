import React, { Component } from 'react'
import "./Modal.css";


export class Modal extends Component {

   state = {
       toggleModal : false
   }

    

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

    
  
        return (
            <div  style={displayModal} className="modal">
            <div className="modal-box">
                <h1>Hello</h1>
                <h1>Enter Blog post</h1>
            </div>  

        </div>
        )
    }
}

export default Modal
