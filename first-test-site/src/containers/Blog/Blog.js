import React, {Component} from 'react'
import style from "./blog.module.css"
import {Link} from "react-router-dom"
import { connect } from "react-redux";
import BlogPost from "../../components/BlogPost/BlogPost";
import * as actions from "../../store/actions/blog";
import axios from "axios";


class Blog extends Component {


    componentDidMount() {
        this.props.onFetchPosts();
    }


    render(){
        
        return (

        <React.Fragment>
        <div className={style.BlogLandingPage}>
            <h1>Blog landing page</h1>
        </div>
        <div>
        <div className={style.gridContainer}>



        <div className={style.BlogMainContent}>  
        <BlogPost />
        <BlogPost />
        <BlogPost />
        
        
        </div>
        
        
        
        
        <div className={style.BlogSideBar}> 
             <div className={style.BlogSideBarContainer}> 
             <Link to="/" className={style.button}>Add Post</Link>

            <h4>*LINKS TO POSTS*</h4>
            <h4>*LINKS TO POSTS*</h4>
            <h4>*LINKS TO POSTS*</h4>
            </div>
        </div>
        </div>
        </div>
        </React.Fragment>
    )}
    
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts: () => dispatch(actions.fetchPosts())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog, axios);