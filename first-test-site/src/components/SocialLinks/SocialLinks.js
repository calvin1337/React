import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import { faFacebook, faTwitter, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons' ;
import { faSquare, faStack, faCircle, faTimes} from "@fortawesome/free-solid-svg-icons";
import "./test.css"

import styles from "./socialLinks.module.css"

 function SocialLinks() {
    return (

        <div  style={inlineBlock}>

            <span className="fa-stack twt testingtwitter fa-2x">
                <FontAwesomeIcon color="white"  style={widthIcons} className="fa-stack-1x" icon={faCircle}  />
                <FontAwesomeIcon color="#1DA1F2"style={twitterOuter} className="fa-stack-1x twitter fa" icon={faCircle} />
                <FontAwesomeIcon color="white"  style={twitterBird} className="fab fa-twitter fa-stack-1x" icon={faTwitter}  />
            </span>
            <span className="fa-stack git fa-2x">
                <FontAwesomeIcon  color="white" className="fa-stack-1x tweet" icon={faCircle}  />
                <FontAwesomeIcon  color="white" className="fa-stack-1x github fa" icon={faCircle} />
                <FontAwesomeIcon  color="#222" className="fab fa-github fa-stack-1x" icon={faGithub}  />
            </span>
            <span className="fa-stack twt fa-2x">
                <FontAwesomeIcon color="white"  style={widthIcons} className="fa-stack-1x" icon={faCircle}  />
                <FontAwesomeIcon color="white"  className="fa-stack-1x facebook fa" icon={faCircle} />
                <FontAwesomeIcon color="#4267B2"  className="fab fa-facebook fa-stack-1x" icon={faFacebook}  />
            </span>
            <a><span className="fa-stack goo fa-2x">
                <FontAwesomeIcon   style={widthIcons} className="fa-stack-1x insta1" icon={faCircle}  />
                <FontAwesomeIcon  className="fa-stack-1x fa-circle insta fa" icon={faSquare} />
                <FontAwesomeIcon  className="fab fa-instagram fa-stack-1x" icon={faInstagram}  />
            </span></a>
        </div>
    )
}




export default SocialLinks


const style = {
    color:"white",
    borderRadius: "50%"

}

const widthIcons = {
    width: "1.5em !important",
}

const twitterOuter = {
    fontSize: "40px"
}

const twitterBird = {
    fontSize: "30px"
}

const inlineBlock = {
    display: "initial",
    width: "500px" ,
    margin: "auto" ,
    textAlign: "center",
    paddingTop: "20px",
    height:"500px"
}


