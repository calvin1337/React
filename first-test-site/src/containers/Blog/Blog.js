import React from 'react'
import style from "./blog.module.css"

function Blog() {
    return (

        <React.Fragment>
        <div className={style.BlogLandingPage}>
            <h1>Blog landing page</h1>
        </div>
        <div className={style.gridContainer}>


        <div className={style.BlogMainContent}>  
        
        <h1>Sample Blog Post</h1>  
        
        
        </div>
        
        
        
        
        <div className={style.BlogSideBar}> <h1>Blog SideBar</h1></div>
        </div>
        </React.Fragment>
    )
}

export default Blog;
