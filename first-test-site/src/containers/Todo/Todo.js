import React, { Component } from 'react';
import styles from "./todo.module.css";
import TodoItem from "../../components/TodoItem/TodoItem";
import axios from "axios"

export class Todo extends Component {

    state = {
        todos : [

        ],
        newTodo: ""
    }

    componentDidMount(){
        
        this.getTodos()
        
       
    }

    getTodos = () => {
        axios.get("https://react-first-project-4e07c.firebaseio.com/Todo.json")
        .then(res => {
            const todos = [];
            for(let key in res.data){
                todos.push({
                    ...res.data[key],
                    id: key
                });
            }
            this.setState({todos: todos})
        })
    }


    postClickHandler = (id) => {
        axios.delete(`https://react-first-project-4e07c.firebaseio.com/Todo/${id}.json`)
        .then(res => this.setState({ todos:[...this.state.todos.filter
            (todo => todo.id !== id)]}))  
            
           
    }

    changedHandle = (e) => {
      
        if(e.keyCode === 13){
            
           let title = document.getElementById("todoInput");
           this.addTodo(title.value);
           title.value = ""
        }
            
    }

    
    


    addTodo = (titleValue) => {
        let data = {
                title: titleValue,
                completed: false
        }

        axios.post("https://react-first-project-4e07c.firebaseio.com/Todo.json" , data)
        .then(res => this.getTodos())
        
      }



    
    render() {

        let todoItems = "" 

        todoItems = this.state.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo.title} onClick={() => this.postClickHandler(todo.id)} completed={todo.completed}/>
        ))


        return (
            <div className={styles.todoContainer}>

                <h1 style={h1Style}>React To-Do-List</h1>

                     <div className={styles.TodoListContainer}>

                         <div className={styles.inputContainer}>
                         <input onKeyDown={(e) => this.changedHandle(e)} type="text" name="task" id="todoInput" placeholder="Insert your task here..." />
                         </div>

                        <div className={styles.TodoList}>
                            {todoItems}
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

    const displayNone = {
        display: "none"
    }

export default Todo

