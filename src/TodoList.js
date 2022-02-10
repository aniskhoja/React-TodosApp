import React from 'react'
import Todo from './Todo'

export const TodoList = ({ todos, toggleTodo }) => {
  return (

          <ul className='list-group'>
              {todos.map(todo => <li className='list-group-item' key={todo.id}><Todo toggleTodo={toggleTodo} todo={todo} /></li> )}
          </ul>

   
  )
}
