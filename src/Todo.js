import React from 'react'

const Todo = ({ todo, toggleTodo }) => {
    
    return (

        <div className="form-check">
        <input className="form-check-input"type="checkbox" defaultChecked={todo.completed} onClick={() => toggleTodo(todo.id)} id="gridCheck1" />
        <label className="form-check-label" for="gridCheck1">
          {todo.name}
        </label>
      </div>

        
      
    )
};

export default Todo