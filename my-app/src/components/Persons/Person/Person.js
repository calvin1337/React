import React, {Component} from "react";
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/WithClass";
import classes from "./Person.module.css";
import PropTypes from "prop-types"
import AuthContext from "../../../context/auth-context";


class Person extends Component {

    constructor(props){
        super(props)
        this.inputElementRef = React.createRef();
    }


    static contextType = AuthContext; 

    componentDidMount(){
        // this.inputElement.focus();
        
        this.inputElementRef.current.focus();
    }

    render () {
        console.log(["[Person.js] rendering"])
        return(
        <Aux>
           
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
            
            
        <p key="aa1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p key="gmkm">{this.props.children}</p>
        <input 
        key="mkmkm" 
        ref={this.inputElementRef}
        type="text" 
        onChange={this.props.changed}
        value={this.props.name}
         />
        </Aux>
        )
        };
    }
    
    
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func 
};

export default withClass(Person, classes.Person);