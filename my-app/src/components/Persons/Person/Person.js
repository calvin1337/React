import React, {Component} from "react";
import Aux from "../../../hoc/Aux";

import classes from "./Person.module.css";


class Person extends  Component {

    render () {
        console.log(["[Person.js] rendering"])
        return(
        <Aux>
        <p key="aa1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p key="gmkm">{this.props.children}</p>
        <input key="mkmkm" type="text" onChange={this.props.changed} value={this.props.name}/>
        </Aux>
        )
        };
    }
    
    


export default Person;