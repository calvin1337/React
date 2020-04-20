import React, { Component } from 'react'
import "./Modal.css";
import CreatePost from "../../components/BlogPost/createPost/CreatePost";


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
                <CreatePost />
            </div>  

        </div>
        )
    }
}

export default Modal
