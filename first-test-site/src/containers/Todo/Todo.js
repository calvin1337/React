import React, { Component } from 'react';
import styles from "./todo.module.css";
import TodoItem from "../../components/TodoItem/TodoItem";

export class Todo extends Component {

    postClickHandler = () => {
        console.log("Hello")
    }

    
    render() {
        return (
            <div className={styles.todoContainer}>

                <h1 style={h1Style}>React To-Do-List</h1>

                     <div className={styles.TodoListContainer}>

                         <div className={styles.inputContainer}>
                         <input type="text" name="task" placeholder="Insert your task here..." />
                         </div>

                        <div className={styles.TodoList}>
                            <TodoItem onClick={this.postClickHandler}/>
                        </div>
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

