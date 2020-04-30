import React, { Component } from 'react'
import styles from "../Homepage/homepage.module.css";
import InfoType from "../../Components/InfoType/InfoType";
import main from "./main.module.css";
import Button from "../../Components/Buttons/Buttons";
import FighterInfo from "../../Components/fighterInfo/fighterInfo";

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

                    <img src="/" width="100%" height="420px"></img>

                    <div className={main.winnerBtn}>
                    <Button btnType="winBtn">Wins</Button>
                    </div>
                    </div>
                    <div className={main.infoContainer}>
                        <FighterInfo fighterStyle="marvel"/>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={main.fighterName}>
                <h1>Batman</h1>
                </div>
                <div className={main.rightGridContainer}>
                     
                    <div className={main.pictureContainer}>

                    <img src="/" width="100%" height="420px"></img>

                        <div className={main.winnerBtn}>
                        <Button btnType="winBtn">Wins</Button>

                        </div>
                    
                    </div>
                    <div className={main.infoContainer}>
                    <FighterInfo fighterStyle="dc"/>

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
