import React, { Component } from 'react'
import BlogPost from "./BlogPost";

export default class PostItem extends Component {
    render() {
        return (
            this.props.posts.map((post) => (
                <BlogPost />
                ))
        )
    }
}
