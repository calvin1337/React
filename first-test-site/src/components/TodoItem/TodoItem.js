import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash, faEdit, faCheck} from '@fortawesome/free-solid-svg-icons'; 

import styles from "./todoItem.module.css";

export class TodoItem extends Component {

    getStyle = () => {
      return {
          textDecoration: this.props.completed ? "line-through" : "none"
      } 
    }

    render() {
       
        return (
            <div  className={styles.todoItem}>
            <p style={this.getStyle()}>{this.props.todo}</p>
            <span>
                <button onClick={this.props.onComplete} className={styles.doneTask}> <FontAwesomeIcon icon={faCheck} size="2x"/></button>
                <button  className={styles.editTask}> <FontAwesomeIcon icon={faEdit} size="2x"/></button>
                <button onClick={this.props.onDelete} className={styles.removeTask}> <FontAwesomeIcon icon={faTrash} size="2x"/></button>
            </span>
          </div>
        )
    }
}

export default TodoItem
