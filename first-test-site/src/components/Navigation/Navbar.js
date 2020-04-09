import React  from 'react'
import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";
 function Navbar() {
    return (
        <nav id={styles.navbar}>
            <ul>
                <NavLink  className={styles.navItem}  exact  to="/">Home</NavLink>
                <NavLink  className={styles.navItem} to="/about">About</NavLink>
                <NavLink  className={styles.navItem} to="/blog">Blog</NavLink>
            </ul>
        </nav>
    )
}


export default Navbar