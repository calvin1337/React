import React  from 'react'
import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons' 
import { faBars } from '@fortawesome/free-solid-svg-icons' 


function Navbar() {
    return (
        <nav id={styles.navbar}>
            <div className={styles.navToggle}>
            <FontAwesomeIcon className={styles.navToggleBtn} style={style} icon={faBars} size="2x"/>
            
            <div className={styles.NavToggleLinks}>

            <ul>
            <div className={styles.navLogoToggle}>
            <h4>React <FontAwesomeIcon style={style} icon={faReact} size="1x"/> </h4>
            

            </div>

            <NavLink  className={styles.navItemToggle}  exact  to="/">Home</NavLink>
            <NavLink  className={styles.navItemToggle} to="/about">About</NavLink>
            <NavLink  className={styles.navItemToggle} to="/blog">Blog</NavLink>
            <NavLink  className={styles.navItemToggle} to="/todo">Todo</NavLink>

            </ul>


            </div>
            </div>
            <div className={styles.navLogo}>
            <h4>React <FontAwesomeIcon style={style} icon={faReact} size="1x"/> </h4>
            

            </div>
            
            <ul>
            
                <NavLink  className={styles.navItem}  exact  to="/">Home</NavLink>
                <NavLink  className={styles.navItem} to="/about">About</NavLink>
                <NavLink  className={styles.navItem} to="/blog">Blog</NavLink>
                <NavLink  className={styles.navItem} to="/todo">Todo</NavLink>

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