import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import { faFacebook, faTwitter, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons' ;
import { faSquare, faStack, faCircle, faTimes} from "@fortawesome/free-solid-svg-icons";

import styles from "./socialLinks.module.css"

 function SocialLinks() {
    return (

        <div style={inlineBlock}>

            <span className="fa-stack twt fa-2x">
                <FontAwesomeIcon color="white"   className="fa-stack-1x" icon={faCircle}  />
                <FontAwesomeIcon color="#1DA1F2" style={twitterOuter} className="fa-stack-1x twitter fa" icon={faCircle} />
                <FontAwesomeIcon color="white"  style={twitterBird} className="fab fa-twitter fa-stack-1x" icon={faTwitter}  />
            </span>
        </div>
    )
}




export default SocialLinks


const style = {
    color: "#eee",
    margin: "10px",

}

const twitterOuter = {
    fontSize: "28px"
}

const twitterBird = {
    fontSize: "21px"
}

const inlineBlock = {
    display: "inline-block",
    width: "100%" ,
    margin: "auto" ,
    textAlign: "center",
    background: "#222",
    paddingTop: "20px"

}