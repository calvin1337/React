import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./animatedArrow.css"
export class AnimatedArrow extends Component {
    render() {
        return (
            <li>
                <Link style={{ textDecoration: 'none' }} className="animated-arrow">
                  <span class="the-arrow -left">
                     <span class="shaft"></span>
                  </span>
                 <span class="main">
                    <span class="text">
                     {this.props.text}
                     </span>
                <span class="the-arrow -right">
                <span class="shaft"></span>
                </span>
                </span>
                </Link>
            </li>
        )
    }
}

export default AnimatedArrow
