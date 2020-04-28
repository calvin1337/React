import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import { faFacebook, faTwitter, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons' ;
import { faSquare, faStack, faCircle, faTimes} from "@fortawesome/free-solid-svg-icons";
import "./test.css"

import styles from "./socialLinks.module.css"

 function SocialLinks() {
    return (

        <div  style={inlineBlock}>

            <a><span className="fa-stack twt fa-2x">
                <FontAwesomeIcon color="white"  style={widthIcons} className="fa-stack-1x testing" icon={faCircle}  />
                <FontAwesomeIcon color="#1DA1F2" className="fa-stack-1x twitterOuter fa" icon={faCircle} />
                <FontAwesomeIcon color="white"   className="fab fa-twitter twitterBird fa-stack-1x" icon={faTwitter}  />
            </span></a>
            <a><span className="fa-stack git fa-2x">
                <div className="testing"><FontAwesomeIcon  className="fa-stack-1x fa-circle" icon={faCircle}/></div>
                <FontAwesomeIcon  color="white" className="fa-stack-1x github fa" icon={faCircle} />
                <FontAwesomeIcon  color="#222" className="fab fa-github fa-stack-1x" icon={faGithub}  />
            </span></a>
           <a><span className="fa-stack twt fa-2x">
                <FontAwesomeIcon color="white"  style={widthIcons} className="fa-stack-1x" icon={faCircle}  />
                <FontAwesomeIcon color="white"  className="fa-stack-1x facebook fa" icon={faCircle} />
                <FontAwesomeIcon color="#4267B2"  className="fab fa-facebook fa-stack-1x" icon={faFacebook}  />
            </span></a>
            <a><span className="fa-stack goo fa-2x">
                <FontAwesomeIcon  color="white" style={widthIcons} className="fa-stack-1x insta1" icon={faCircle}  />
                <FontAwesomeIcon  color="#222" className="fa-stack-1x fa-circle instagram-circle fa" icon={faCircle} />
                <FontAwesomeIcon  color="white" className="fab fa-instagram fa-stack-1x" icon={faInstagram}  />
            </span></a>
        </div>
    )
}




export default SocialLinks

let instagramColor = 'radial-gradient(circle at 35% 90%, rgb(254, 197, 100), transparent 50%), radial-gradient(circle at 0px 140%, rgb(254, 197, 100), transparent 50%), radial-gradient(at 0px -25%, rgb(82, 88, 207), transparent 50%), radial-gradient(at 20% -50%, rgb(82, 88, 207), transparent 50%), radial-gradient(at 100% 0px, rgb(137, 61, 194), transparent 50%), radial-gradient(at 60% -20%, rgb(137, 61, 194), transparent 50%), radial-gradient(at 100% 100%, rgb(217, 49, 122), transparent), rgba(0, 0, 0, 0) linear-gradient(rgb(101, 89, 202), rgb(188, 49, 143) 30%, rgb(227, 63, 95) 50%, rgb(247, 118, 56) 70%, rgb(254, 198, 109) 100%)';

const style = {
    color:"white",
    borderRadius: "50%"

}

const widthIcons = {
    width: "1.5em !important",
}



const inlineBlock = {
    display: "initial",
    width: "500px" ,
    margin: "auto" ,
    textAlign: "center",
    paddingTop: "20px",
    height:"500px"
}


