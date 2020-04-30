import React, { Component } from 'react';
import "./buttons.css";

export class Button extends Component {

    render() {
            
        return (
            <button className={this.props.btnType}>{this.props.children}</button>
        )
    }
}

export default Button
