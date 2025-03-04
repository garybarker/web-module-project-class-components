import React from 'react'
import Todo from './Todo.js'

export default class TodoList extends React.Component {
  
  render() {
    return (
      <div>
        {this.props.todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
      </div>
    )
  }
}