import React from 'react'
import {Link} from "react-router-dom";
import style from "./about.module.css";

 function About() {
    return (
        <div>   
            <div className={style.gridContainer}>
                
                <div className={style.Intro}>

                <p> This is my first personal react project I've tried to put this together using things I've learned so far and put it into practice.
                    I've decided not to use a css framework for this as I thought It would be good practice but I will use react-bootstrap for one of the pages below. 
                     </p>
                <h3>I Hope to add These 3 things to this site.</h3>
                </div>
            
            
            <div className={style.Example1}>
                
                <div className={style.card}>
                    <figure>
                        <img alt={"random from picsum"}src={"https://picsum.photos/200/300"} />
                    </figure>
                    <h2>Blog</h2>
                    <p>A blog using a database for displaying posts and creating</p><br></br>

                    <Link to="/" className={style.button}>Learn More</Link>
                    
                </div>

            </div>
            
            
            
            <div className={style.Example2}>

                 
            <div className={style.card}>
                    <figure>
                        <img alt={"random from picsum"}src={"https://picsum.photos/200/300"} />
                    </figure>
                    <h2>To-Do-List</h2>
                    <p>A to-do-list using a database for displaying and creating</p><br></br>

                    <Link to="/" className={style.button}>Learn More</Link>
                </div>


            </div>



            <div className={style.Example3}>

             
            <div className={style.card}>
                    <figure>
                        <img alt={"random from picsum"}src={"https://picsum.photos/200/300"} />
                    </figure>
                    <h2>Login Authentication</h2>
                    <p>Adding a login page and authentication to be able to create blog posts</p><br></br>

                    <Link to="/" className={style.button}>Learn More</Link>
                </div>



            </div>
            
            </div>
            
        </div>
    )
}

export default About