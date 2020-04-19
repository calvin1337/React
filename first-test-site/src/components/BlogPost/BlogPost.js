import React, { Component } from 'react'
import style from "./blogPost.module.css"

class BlogPost extends Component  {

  
  
 
  render(){

    


    
    return (
        <React.Fragment>
        <div className={style.post}>
         
        <div className={style.postHeading}>
        <div className={style.postDate}>
    <p className={style.dateDay}>{this.props.day}</p>
  <p className={style.dateMonth}>{this.props.month}</p>
      </div>
  <p className={style.postTitle}>{this.props.currentTitle}</p>

  

    </div>
    <div className={style.postContent}>
       <div className={style.background}>
    <p>{this.props.currentContent}</p>
    </div>
    <p className={style.postInfo}>Posted at {this.props.time}</p>
    </div>
    </div>
   
    </React.Fragment>
    )}
    
}


export default BlogPost