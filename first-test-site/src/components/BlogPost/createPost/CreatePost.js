import React, { Component } from 'react'
import styles from "./createPost.module.css";

export class CreatePost extends Component {
    

    changedHandler = () => {
        let changedInput = document.getElementById("newTitle").value

        console.log(changedInput)
    }



    
    render() {

        return (
            <form style={styles}> 
                <div>                    
                    <label for="newTitle"><span>Blog Title</span></label>
                    <input onChange={this.changedHandler} type="text" id="newTitle"></input>
                </div>
                <div style={weemargin}>
                <label for="newBlogContent"><span>Post:</span></label>
                    <textarea id="newBlogContent"></textarea>
                </div>
            </form>
        )
    }
}

const weemargin = {
    paddingTop: "10px"
}

export default CreatePost
