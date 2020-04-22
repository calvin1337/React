import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons' 

 function SocialLinks() {
    return (

        <div style={inlineBlock}>

    <FontAwesomeIcon style={style} icon={faFacebook} size="4x"/>
    <FontAwesomeIcon style={style} icon={faTwitter} size="4x"/>
    <FontAwesomeIcon style={style} icon={faGithub} size="4x"/>
    <FontAwesomeIcon style={style} icon={faInstagram} size="4x"/>
        
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
    background: "#222"

}