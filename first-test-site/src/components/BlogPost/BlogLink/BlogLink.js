import style from "./blogLink.module.css";
import React, { Component } from 'react'

export class BlogLink extends Component {

    

    render() {
        return (
            <a onClick={this.props.clicked} className={style.bloglink} >{this.props.title} posted {this.props.dateposted}</a>
        )
    }
}

export default BlogLink
