import React from 'react'
import style from "./about.module.css";
import Card from "../../components/Card/Card";

 function About() {
    return (
        <div>   
            <div className={style.gridContainer}>
                
                <div className={style.Intro}>

                <p> This is my first personal react project I've tried to put this together using things I've learned so far and put it into practice.
                    I've decided not to use a css framework for this as I thought It would be good practice using vanilla css. 
                     </p>
                <h3>I hope to add these 3 things to this site.</h3>
                </div>
                    
                    <div className={style.cardOne}><Card /></div>
                    <div className={style.cardTwo}><Card /></div>
                    <div className={style.cardThree}><Card /></div>

                
            
           
            
            </div>
            
        </div>
        
    )
}

export default About