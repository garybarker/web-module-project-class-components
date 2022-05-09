import React from 'react';
import TodoList from './TodoList';

const todosList = [
  {
    name: 'Laundry',
    id: 1,
    completed: false
  },
  {
    name: 'Dishes',
    id: 2,
    completed: false
  }
]
class App extends React.Component {
  constructor(){
    super()
      this.state = {
        todos: todosList
      }
  }


  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

export default App;
