import React, { Component } from 'react';
import styles from "./fighterInfo.module.css";

export class FighterInfo extends Component {
    getStyle = () => {
        if(this.props.fighterStyle === "marvel"){
            return marvel
        } else return dc
    }
    render() {
       
        return (

            <div className={styles.infoContainer}>
            <div style={this.getStyle()}className={styles.infoBlock}>
               <h1>James Howlett</h1>
            </div>
           <div style={this.getStyle()} className={styles.infoBlock}>
               <h1>Incredible Hulk #180</h1>
            </div>
            <div style={this.getStyle()} className={styles.infoBlock}>
               <h1>5' 3" (1.60 m)</h1>
            </div>
            <div style={this.getStyle()} className={styles.infoBlock}>
               <h1>Mutant</h1>
            </div>
            <div style={this.getStyle()} className={styles.infoBlock}>
               <h1>Male</h1>
            </div>
            <div style={this.getStyle()} className={[styles.infoBlock, styles.ability].join(" ")}>
               <h1>Lorem </h1>
            </div>
            <div style={this.getStyle()} className={[styles.infoBlock, styles.power].join(" ")}>
               <h1>Lorem </h1>
            </div>
          </div>
        )
    }
}

const marvel = {
    background:"#c81912",
    color: "#fff"
}

const dc = {
    background:"#004E98",    
    color:"#fff"
}

export default FighterInfo
