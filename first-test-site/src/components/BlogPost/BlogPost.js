import React, { Component } from 'react'
import style from "./blogPost.module.css"


class BlogPost extends Component  {
 
  render(){

    
    
    return (
        <React.Fragment>
        <div className={style.post}>
        <div className={style.postHeading}>
        <div className={style.postDate}>
        <p className={style.dateDay}>11</p>
        <p className={style.dateMonth}>April</p>
      </div>
  <p className={style.postTitle}>{this.props.title}</p>
    </div>
    <div className={style.postContent}>
      <p>Nulla tempor mattis sapien vel laoreet. Duis at maximus magna. Nam libero lectus, commodo scelerisque ligula eu, rutrum ultricies metus. In at purus eget dui consequat facilisis. Nullam id leo sagittis, vehicula risus non, hendrerit purus. Etiam vel mauris erat. Morbi tempor consequat ligula in tempus. Ut libero enim, laoreet id accumsan in, pharetra ac dolor. Fusce laoreet nisi eu tristique lobortis.</p>
      <p className={style.postInfo}>Posted at 5:21</p>
    </div>
    </div>
    </React.Fragment>
    )}
    
}


export default BlogPost