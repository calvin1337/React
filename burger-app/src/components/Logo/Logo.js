import React from "react";

import burgerLogo from "../../assets/images/burger-logo.png";
import classes from "./logo.module.css";
const logo = (props) => (
    <div style={{height:props.height}} className={classes.Logo}>
        <img src={burgerLogo} alt="MyBurger" />
    </div>
);


export default logo;

