import React, { Component } from 'react'
import styles from "../Homepage/homepage.module.css";
import InfoType from "../../Components/InfoType/InfoType";
import main from "./main.module.css";
import Button from "../../Components/Buttons/Buttons";
import axios from "axios";
import FighterInfo from "../../Components/fighterInfo/fighterInfo";

export class Main extends Component {

        state = {

            dc: [

            ],
            
            marvel: [

            ]
            
        }

        componentDidMount(){
            this.getMarvelCharacter();
            this.getDcCharacter();
        }

        getMarvelCharacter = () => {
            axios.get("https://marvelvsdc-6041d.firebaseio.com/marvel.json")
            .then(res => {
                const character = [];
                for(let key in res.data){
                    character.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({marvel: character}, () => {
                    this.randomMarvelCharacter();
                });
            })
    
        }

        getDcCharacter = () => {
            
        }

        randomDcCharacter = () => {
            
        }

        randomMarvelCharacter = () => {
            alert(this.state.marvel[0].name)
        }


        randomFighters = () => {
            this.randomDcCharacter()
            this.randomMarvelCharacter()
        }


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


        <Button onClick={this.randomFighters} btnType="vsBtn">VS</Button>
            <InfoType />


            <div className={main.tieButton}>
            <Button btnType="tieBtn">Tie</Button>
            </div>
        </div>
        
        </React.Fragment>
        )
    }
}

export default Main
