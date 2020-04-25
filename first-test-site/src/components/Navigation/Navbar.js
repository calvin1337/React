import React, {Component } from 'react'
import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons' 
import { faBars } from '@fortawesome/free-solid-svg-icons' 



export class Navbar extends Component {

    state = {
        toggle: false,
        
    }

    
    componentDidMount() {
        
        console.log(this.props.match, "hello")
             
     } 
    

    toggleNavHandler = () => {
        
       if(this.state.toggle === false){
        document.body.classList.add(`${styles.openNav}`)
        this.setState({toggle: true})
       } 
        
       if(this.state.toggle === true){
        document.body.classList.remove(`${styles.openNav}`)
        this.setState({toggle: false})

    }
}

toggleCloseMenu = () => {
    this.setState({toggle: false})
    this.toggleNavHandler()
}

    render() {
        return (
            <React.Fragment>
            <nav className={styles.navbar} id="navbar">
                
                
                <div className={styles.NavToggleLinks}>
    
                <ul>
                <div className={styles.navLogoToggle}>
                <h4>React <FontAwesomeIcon style={style} icon={faReact} size="1x"/> </h4>
                
    
                </div>
                <NavLink  onClick={this.toggleCloseMenu} className={styles.navItemToggle}  exact  to="/">Home</NavLink>
                <NavLink  onClick={this.toggleCloseMenu} className={styles.navItemToggle} to="/about">About</NavLink>
                <NavLink  onClick={this.toggleCloseMenu} className={styles.navItemToggle} to="/blog">Blog</NavLink>
                <NavLink  onClick={this.toggleCloseMenu} className={styles.navItemToggle} to="/todo">Todo</NavLink>
    
                </ul>
    
    
                
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
    
            <div className={styles.navToggle}>
            <FontAwesomeIcon onClick={this.toggleNavHandler} id="toggleNavBar" className={styles.navToggleBtn} style={style} icon={faBars} size="2x"/>
            </div>
            </React.Fragment>
        )
    }
}



const style = {
    display: "inline-block",
    margin: "0",
    padding: "0",
    justifyItems: "center"
}





export default Navbar