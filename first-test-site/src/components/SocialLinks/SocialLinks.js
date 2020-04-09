import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons' 

 function SocialLinks() {
    return (

        <div style={inlineBlock}>

    <FontAwesomeIcon style={style} icon={faFacebook} size="5x"/>
    <FontAwesomeIcon style={style} icon={faTwitter} size="5x"/>
    <FontAwesomeIcon style={style} icon={faGithub} size="5x"/>
    <FontAwesomeIcon style={style} icon={faInstagram} size="5x"/>
        
        </div>
    )
}

export default SocialLinks


const style = {
    color: "#333",
    margin: "10px"
}

const inlineBlock = {
    display: "inline-block"
}