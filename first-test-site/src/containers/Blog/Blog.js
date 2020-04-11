import React from 'react'
import style from "./blog.module.css"
import BlogPost from "../../components/BlogPost/BlogPost";
function Blog() {
    return (

        <React.Fragment>
        <div className={style.BlogLandingPage}>
            <h1>Blog landing page</h1>
        </div>
        <div className={style.gridContainer}>


        <div className={style.BlogMainContent}>  
        <BlogPost />
        <BlogPost />
        <BlogPost />
        
        
        </div>
        
        
        
        
        <div className={style.BlogSideBar}> 
             <div> 
            <h4>*LINKS TO POSTS*</h4>
            <h4>*LINKS TO POSTS*</h4>
            <h4>*LINKS TO POSTS*</h4>
            </div>
        </div>
        </div>
        </React.Fragment>
    )
}

export default Blog;
