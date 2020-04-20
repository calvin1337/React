import React, { Component } from 'react'
import "./Modal.css";
import CreatePost from "../../components/BlogPost/createPost/CreatePost";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTimes } from '@fortawesome/free-solid-svg-icons';



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
            <button className="closeBtn" id="close">
            <FontAwesomeIcon icon={faTimes} size="1x"/> </button>

                <CreatePost submitted={this.props.submitted} />
            </div>  

        </div>
        )
    }
}

export default Modal
