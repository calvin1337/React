import React from 'react'
import style from "./about.module.css";

 function About() {
    return (
        <div>   
            <div className={style.gridContainer}>
                
                <div className={style.Intro}>

                Hello world

                </div>
            
            
            <div className={style.Example1}>Hello</div>
            <div className={style.Example2}>World</div>
            <div className={style.Example3}>Test</div>
            
            </div>
            
        </div>
    )
}

export default About