import React from 'react'
import styles from "./homepage.module.css";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import PersonalPicture from "../../components/PersonalPicture/PersonalPicture";

function Homepage() {
    return (
        <React.Fragment>
        <div className={styles.gridContainer}>
           
           <div className={styles.grid}></div>           
            <div className={styles.grid}>  
                
            </div>

               



            
        </div> 
        <SocialLinks />
        </React.Fragment>
    )
}


export default Homepage;

