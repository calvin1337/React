import React, { Component } from 'react'
import styles from "./createPost.module.css";

export class CreatePost extends Component {
    
    state = {
        post: "" ,
        title : "",
        day : 0 ,
        month : "" ,
        time : "",
        id : 0,
        submitted: false
    }



    changedHandler = () => {
        let changedTitle = document.getElementById("newTitle").value
        let changedPost = document.getElementById("newBlogPost").value

        console.log(changedTitle, changedPost)
    }

    getDate = (e) => {

        e.preventDefault();
        
        let month = new Date(); 
        month = month.getMonth()

        let day = new Date();
        day = day.getDay();

        let time = new Date();
        time = Date.now();
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
                    <textarea onChange={this.changedHandler}  id="newBlogPost"></textarea>
                </div>
                <div style={weemargin}>
                <input  onClick={(e) => this.getDate(e)} type="submit" value="Submit" class="submit-btn"></input>
                </div>
            </form>
        )
    }
}

const weemargin = {
    paddingTop: "10px"
}

export default CreatePost
