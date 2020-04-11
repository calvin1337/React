import React  from 'react'
import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons' 


function Navbar() {
    return (
        <nav id={styles.navbar}>
            
            <div className={styles.navLogo}>
            <h4>React <FontAwesomeIcon style={style} icon={faReact} size="1x"/> </h4>
            

            </div>
            
            <ul>
            
                <NavLink  className={styles.navItem}  exact  to="/">Home</NavLink>
                <NavLink  className={styles.navItem} to="/about">About</NavLink>
                <NavLink  className={styles.navItem} to="/blog">Blog</NavLink>
            </ul>
            

        </nav>
    )
}

const style = {
    display: "inline-block",
    margin: "0",
    padding: "0",
    justifyItems: "center"
}


export default Navbar