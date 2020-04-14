import { Link } from "react-router-dom"
import style from "./blogLink.module.css";
import React, { Component } from 'react'

export class BlogLink extends Component {

    

    render() {
        return (
            <Link onClick={this.props.clicked} className={style.bloglink} >{this.props.title}</Link>
        )
    }
}

export default BlogLink
