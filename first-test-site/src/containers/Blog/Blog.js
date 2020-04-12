import React from 'react'
import style from "./blog.module.css"
import {Link} from "react-router-dom"
import BlogPost from "../../components/BlogPost/BlogPost";


function Blog() {
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
    )
}

export default Blog;
