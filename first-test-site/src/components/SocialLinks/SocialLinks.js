import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons' 
import styles from "./socialLinks.module.css"
 function SocialLinks() {
    return (

        <div style={inlineBlock}>

    <a className={styles.SocialBtn}><FontAwesomeIcon icon={faFacebook} size="4x"/></a>
    <a className={styles.SocialBtn}><FontAwesomeIcon icon={faTwitter} size="4x"/></a>
    <a className={styles.SocialBtn}><FontAwesomeIcon icon={faGithub} size="4x"/></a>
    <a className={styles.SocialBtn}><FontAwesomeIcon icon={faInstagram} size="4x"/>
 </a>

        
        </div>
    )
}




export default SocialLinks


const style = {
    color: "#eee",
    margin: "10px",

}

const inlineBlock = {
    display: "inline-block",
    width: "100%" ,
    margin: "auto" ,
    textAlign: "center",
    background: "#222",
    paddingTop: "20px"

}