import style from "./blogLink.module.css";
import React, { Component } from 'react'

export class BlogLink extends Component {

    

    render() {
        return (
            <li className={style.liLink}>
            <h3 class={style.asidePostTitle}><a onClick={this.props.clicked} className={style.bloglink} >{this.props.title}</a></h3>
             <p className={style.postExcerpt}>Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate...</p>
            </li>
        )
    }
}

export default BlogLink
