import React, {Component} from 'react'
import AddTodo from './AddTodo'

class Todos extends Component {
    state = {
        todos: [
          {id: 1, content: 'Learn React'},
          {id: 2, content: 'Play video games'}
        ]
      }
    deleteTodo = (id) => {
    console.log(id);
    const todos = this.state.todos.filter(todo => {
        return todo.id !== id
    })
    this.setState({
        todos
    })
    }
    addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
        todos
    })
    }
    render() {
        const todoList = this.state.todos.length ? (
            this.state.todos.map(todo => {
                return(
                    <div className="collection-item" key={todo.id}>
                        <span onClick={() => {this.deleteTodo(todo.id)}}>{todo.content}</span>
                    </div>
                )
            })
        ) : (
            <p className="center">You have no Todos left.</p>
        )
        return(
        <div className="todos collection">
            <div className="todo-app container">
                <h1 className="center blue-text">Todo</h1>
                {todoList}
                <p></p>
                <AddTodo addTodo={this.addTodo}/>
            </div>
        </div> 
        )
    }
}

export default Todos