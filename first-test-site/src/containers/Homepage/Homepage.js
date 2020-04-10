import React from 'react'
import style from "./homepage.module.css"
import PersonalPicture from "../../components/PersonalPicture/PersonalPicture"
import {Link} from "react-router-dom"
import SocialLinks from "../../components/SocialLinks/SocialLinks";

 function Homepage() {
    return (
        <div className={style.gridContainer}>

        <div>
            <PersonalPicture />
            <SocialLinks />


        </div>

        <div className={style.aboutText}>
            <h1 className={style.headerText}>Hello my name Is Calvin Donaldson this Is my first react based project!</h1>
            <h2 className={style.subText}>Find out more what I plan on adding to this project by <Link to ='/href' >clicking here</Link> </h2>

        </div>        
        
        </div>
    )
}

export default Homepage;