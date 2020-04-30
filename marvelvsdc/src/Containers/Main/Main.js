import React, { Component } from 'react'
import styles from "../Homepage/homepage.module.css";
import InfoType from "../../Components/InfoType/InfoType";
import main from "./main.module.css";

export class Main extends Component {
    render() {
        return (
            <React.Fragment>
            <div className={styles.container}>

            <div className={styles.left}>



            </div>
            <div className={styles.right}>

                
            </div>

            </div>
            
       

        <div className={main.overlayBox}>
            <InfoType />
        </div>
        
        </React.Fragment>
        )
    }
}

export default Main
