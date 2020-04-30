import React, { Component } from 'react'
import styles from "../Homepage/homepage.module.css";
import InfoType from "../../Components/InfoType/InfoType";
import main from "./main.module.css";
import Button from "../../Components/Buttons/Buttons";

export class Main extends Component {
    render() {
        return (
            <React.Fragment>
            <div className={styles.container}>

            <div className={styles.left}>
                <div className={main.fighterName}>
                <h1>Wolverine</h1>
                 </div>
                 <div className={main.leftGridContainer}>

                    <div className={main.pictureContainer}>
                    
                    </div>
                    <div className={main.infoContainer}>

                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={main.fighterName}>
                <h1>Batman</h1>
                </div>
                <div className={main.rightGridContainer}>
                     
                    <div className={main.pictureContainer}>
                    
                    </div>
                    <div className={main.infoContainer}>

                    </div>
                </div>
                
            </div>

            </div>
            
       

        <div className={main.overlayBox}>
        <Button btnType="vsBtn">VS</Button>
            <InfoType />
            
        </div>
        
        </React.Fragment>
        )
    }
}

export default Main
