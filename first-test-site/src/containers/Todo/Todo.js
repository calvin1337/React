import React, { Component } from 'react';
import styles from "./todo.module.css";


export class Todo extends Component {
    render() {
        return (
            <div className={styles.todoContainer}>
                <h1 style={h1Style}>React To-Do-List</h1>
            
            <div>
                
            </div>
            </div>
        )
    }
}


const h1Style = {
    color: "white",
    fontFamily: "sans-serif",
    textAlign: "center",
    fontSize: "40px",
    padding: "50px"
    }

export default Todo

