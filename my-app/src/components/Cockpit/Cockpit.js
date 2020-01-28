import React, { useEffect, useRef, useContext } from "react";

import styles from "./Cockpit.module.css";
import AuthContext from "../../context/auth-context"


const Cockpit = ( props ) => {

  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);


    useEffect( () => {
      
    console.log("[Cockpit.js] useEffect")
    // Http request..

   // setTimeout( () => {
      //  alert("Saved data to cloud!");
   // }, 1000);
   toggleBtnRef.current.click();
    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect")
    };
  }, []);


  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work 2nd in useEffect")
    };
  });  

    const classes = [];
    let btnClass = "";

    if(props.showPersons){
        btnClass = styles.Red;
    }
    if (props.personsLength <= 2){
      classes.push(styles.Red); // classes = ["red"]
    }
    if (props.personsLength <= 1){

      classes.push(styles.Bold); // classes are red and bold
    }

return(
    <div className={styles.Cockpit}>
    
    <h1>{props.title}</h1>
        
    <p className={classes.join(" ")}>This is really working!</p>
        
    <button ref={toggleBtnRef} 
    className={btnClass}
    onClick={props.clicked}>
    Toggle Persons</button>
    
     <button onClick={authContext.login}>Log in</button>
      
    </div>
);
}

export default React.memo(Cockpit);


