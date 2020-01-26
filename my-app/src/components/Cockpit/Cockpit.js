import React, { useEffect } from "react";

import styles from "./Cockpit.module.css";



const Cockpit = ( props ) => {

    useEffect( () => {
    console.log("[Cockpit.js] useEffect")
  });

    const classes = [];
    let btnClass = "";

    if(props.showPersons){
        btnClass = styles.Red;
    }
    if (props.persons.length <= 2){
      classes.push(styles.Red); // classes = ["red"]
    }
    if (props.persons.length <= 1){

      classes.push(styles.Bold); // classes are red and bold
    }

return(
    <div className={styles.Cockpit}>
    
    <h1>{props.title}</h1>
        
          <p className={classes.join(" ")}>This is really working!</p>
        
        <button className={btnClass}
        onClick={props.clicked}
        >
          Toggle Persons</button>
        </div>
);
}

export default Cockpit


