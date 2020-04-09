import React from 'react'
import styles from "./homepage.module.css";
import SocialLinks from "../../components/SocialLinks/SocialLinks";

function Homepage() {
    return (
        <div className={styles.gridContainer}>
            <div className={styles.grid}>  
                <SocialLinks />
            </div>




            <div className={styles.grid}>bit of info about me</div>
        </div>
    )
}


export default Homepage;