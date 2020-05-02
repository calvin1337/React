import React, { Component } from 'react'
import styles from "../Homepage/homepage.module.css";
import InfoType from "../../Components/InfoType/InfoType";
import main from "./main.module.css";
import Button from "../../Components/Buttons/Buttons";
import axios from "axios";
import Modal from "../../Components/Modal/Modal";
import FighterInfo from "../../Components/fighterInfo/fighterInfo";
import marvelLogo from "../../Images/marvel.png";

export class Main extends Component {

        state = {

            dc: [

            ],
            
            marvel: [

            ],

            currentDc: {

            },
            currentMarvel: {

            },

            showModal: true
            
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
                    this.randomMarvelCharacter(0);
                });
            })
    
        }

        getDcCharacter = () => {
            axios.get("https://marvelvsdc-6041d.firebaseio.com/dc.json")
            .then(res => {
                const character = [];
                for(let key in res.data){
                    character.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({dc: character}, () => {
                    this.randomDcCharacter(0);
                });
            })
        }


        randomDcCharacter = (number) => {
            this.setState({currentDc: this.state.dc[number]})
        }

        randomMarvelCharacter = (number) => {
            this.setState({currentMarvel: this.state.marvel[number]})

        }


        randomFighters = () => {
            let marvelLength = this.state.marvel.length;
            let dcLength = this.state.dc.length;

            let marvelPick = Math.floor(Math.random() * marvelLength);
            let dcPick = Math.floor(Math.random() * dcLength);

            this.randomDcCharacter(dcPick)
            this.randomMarvelCharacter(marvelPick)
        }

        tieGame = () => {
            //    alert(this.state.currentMarvel.record.loss)
        }

        closeModal = (e) => {
            if(e.target.className === "modal"){
                this.setState({showModal : !this.state.showModal})
                 
             }
            
        }

    marvelWin = () => {
        alert("Marvel WIN")
    }
    
    dcWin = (id) => {
        alert("DC WIN")
    }

    render() {
            
        


        return (
            <React.Fragment>
            <div className={styles.container}>

            <div className={styles.left}>
                <div className={main.fighterName}>
                <h1>{this.state.currentMarvel.heroname}</h1>
                 </div>
                 <div className={main.leftGridContainer}>

                    <div className={main.pictureContainer}>

                    <img src={this.state.currentMarvel.img} width="100%" height="420px"></img>

                    <div className={main.winnerBtn}>
                    <Button onClick={this.marvelWin} btnType="winBtn">Wins</Button>
                    </div>
                    </div>
                    <div className={main.infoContainer}>
                        <FighterInfo 
                        name={this.state.currentMarvel.name} 
                        firstAppearance={this.state.currentMarvel.firstapp}
                        species={this.state.currentMarvel.species}
                        height={this.state.currentMarvel.height}
                        gender={this.state.currentMarvel.gender}
                        ability={this.state.currentMarvel.ability}
                        powers={this.state.currentMarvel.powers}
                        fighterStyle="marvel"/>
                    </div>
                </div>
                <div className={main.Test}>
                <img id="bnw" className={main.backgroundLogo} src={marvelLogo} width="300" height="150" />
                </div> 
            </div>
            <div className={styles.right}>
                <div className={main.fighterName}>
                <h1>{this.state.currentDc.heroname}</h1>
                </div>
                <div className={main.rightGridContainer}>
                     
                    <div className={main.pictureContainer}>

                    <img src={this.state.currentDc.img} width="100%" height="420px"></img>

                        <div className={main.winnerBtn}>
                        <Button onClick={this.dcWin} btnType="winBtn">Wins</Button>

                        </div>
                    
                    </div>

                    <div className={main.infoContainer}>

                    <FighterInfo 
                     name={this.state.currentDc.name} 
                     firstAppearance={this.state.currentDc.firstapp}
                     species={this.state.currentDc.species}
                     height={this.state.currentDc.height}
                     gender={this.state.currentDc.gender}
                     ability={this.state.currentDc.ability}
                     powers={this.state.currentDc.powers}
                    fighterStyle="dc"/>

                    </div>
                </div>
                <div className={main.TestDc}>
                <img src="https://vignette.wikia.nocookie.net/marvel_dc/images/1/12/New_DC_logo.png/revision/latest?cb=20130213193308" width="300" height="150"></img>

                </div> 
            </div>
            

            </div>
            
       
            <Modal onClick={(e) => this.closeModal(e)} className="modal" display={this.state.showModal}/>

        <div className={main.overlayBox}>


        <Button onClick={this.randomFighters} btnType="vsBtn">VS</Button>
            <InfoType />


            <div className={main.tieButton}>
            <Button onClick={this.tieGame} btnType="tieBtn">Tie</Button>
            </div>

            <div className={main.bottomVs}>
                <h1>VS</h1>
            </div>

        </div>
        </React.Fragment>
        )
    }
}

export default Main
