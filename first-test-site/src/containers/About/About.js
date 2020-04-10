import React from 'react'
import {Link} from "react-router-dom";
import style from "./about.module.css";

 function About() {
    return (
        <div>   
            <div className={style.gridContainer}>
                
                <div className={style.Intro}>

                Hello world

                </div>
            
            
            <div className={style.Example1}>
                
                <div className={style.card}>
                    <figure>
                        <img alt={"random from picsum"}src={"https://picsum.photos/200/300"} />
                    </figure>
                    <h2>Headline</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis.</p><br></br>

                    <Link to="/" className={style.button}>Learn More</Link>
                </div>

            </div>
            
            
            
            <div className={style.Example2}>World</div>
            <div className={style.Example3}>Test</div>
            
            </div>
            
        </div>
    )
}

export default About