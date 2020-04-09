import React from 'react'
import styles from "./homepage.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons' 

function Homepage() {
    return (
        <div className={styles.gridContainer}>
            <div className={styles.grid}>  
            
            <FontAwesomeIcon className={styles.icons} icon={faFacebook} size="5x"/>
            </div>




            <div className={styles.grid}>bit of info about me</div>
        </div>
    )
}


export default Homepage;