import React, { Component } from 'react'
import styles from "./createPost.module.css";
import axios from "axios";
import {Redirect} from "react-router-dom";
export class CreatePost extends Component {
    
    state = {
        post: "" ,
        title : "",
        day : 0 ,
        month : "" ,
        time : "",
        id : 0,
        submitted: true
    }



    changedHandler = () => {
        let changedTitle = document.getElementById("newTitle").value
        let changedPost = document.getElementById("newBlogPost").value
    }

    postHandler = (time, day, month) => {
        let changedTitle = document.getElementById("newTitle").value
        let changedPost = document.getElementById("newBlogPost").value
        let id = new Date;
        id = Date.now();
        
        if(month === 1){
        month = "January"
          } else if (month === 2){
        month = "February"
          } else if (month === 3){
        month = "March"
          } else if (month === 4){
        month = "April"
          } else if (month === 5){
        month = "May"
          } else if (month === 6){
        month = "June"
          } else if (month === 7){
        month = "July"
          } else if (month === 8){
        month = "August"
          } else if (month === 9){
        month = "September"
          } else if (month === 10){
        month = "October"
          } else if (month === 11){
        month = "November"
          } else if (month === 12){
        month = "December"
          }

        const data = {
            title: changedTitle,
            content: changedPost,
            id: id,
            time: time,
            day: day,
            month: month,
            postName: id 
        }

        axios.post("https://react-first-project-4e07c.firebaseio.com/Blog.json", data)
        .then( response => {
            this.setState({submitted: true})
            window.location.href = '/blog'
        });
    
    }


    getDate = (e) => {

        e.preventDefault();
        
        let month = new Date(); 
        month = month.getMonth()
        month = month + 1

        let day = new Date();
        day = day.getDate();

        let hours = new Date();
        hours = hours.getHours();

        let minutes = new Date();
        minutes = minutes.getMinutes();

        
        if(minutes < 10){
            minutes = "0" + minutes
        }

        let time = (hours + ":" + minutes)
        this.postHandler(time, day, month)
    }

    
    render() {

        return (
            <form  style={styles}> 
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
