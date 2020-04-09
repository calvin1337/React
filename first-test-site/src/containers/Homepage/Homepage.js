import React from 'react'
import styles from "./homepage.module.css";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import PersonalPicture from "../../components/PersonalPicture/PersonalPicture";
function Homepage() {
    return (
        <div className={styles.gridContainer}>
            <div className={styles.grid}>  
                <PersonalPicture />
                <SocialLinks />
            </div>




            <div className={styles.grid}><h1>My name is Calvin Donaldson and I'm an aspersing web developer</h1></div>
        </div>
    )
}


export default Homepage;