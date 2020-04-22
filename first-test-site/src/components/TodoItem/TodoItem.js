import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons'; 

import styles from "./todoItem.module.css";

export class TodoItem extends Component {
    render() {
        return (
            <div onClick={this.props.onClick} className={styles.todoItem}>
            <p>Testing</p>
            <a href="/" className={styles.removeTask}> <FontAwesomeIcon icon={faTrash} size="2x"/></a>
          </div>
        )
    }
}

export default TodoItem
