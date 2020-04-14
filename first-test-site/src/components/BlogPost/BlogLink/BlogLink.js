import style from "./blogLink.module.css";
import React, { Component } from 'react'

export class BlogLink extends Component {

    

    render() {
        return (
            <button onClick={this.props.clicked} className={style.bloglink} >{this.props.title}</button>
        )
    }
}

export default BlogLink
