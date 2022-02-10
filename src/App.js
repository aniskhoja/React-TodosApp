import React, { useState, useEffect } from "react";
import { TodoList } from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);
   const [inputText, setInputText] = useState("")
  
  const handleClick = (e) => {
    if(inputText === "") return
    setTodos([...todos,
    { id: Math.random() * 1000, name: inputText, completed: false }])
    setInputText("");
  }

   useEffect(() => {
    const localStore = JSON.parse(localStorage.getItem('key'))
      if (localStore) setTodos(localStore)
    
  }, [])
  useEffect(() => {
    localStorage.setItem('key', JSON.stringify(todos))
  }, [todos])
 

  const toggleTodo = (id) => {
    const newtodos = [...todos]
    const todo = newtodos.find(todo => todo.id === id)
    todo.completed = !todo.completed
    setTodos(newtodos)
  }

  const handleCompletedTodos = () => {
    const leftTodos = todos.filter(todo => todo.completed === false)
    setTodos(leftTodos)
  }

  return (
    <div className="container">
      <br/>
      <div className="input-group mx-auto">
      <input type="text" className="form-control" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Type in your Todo's" />
      <button class="btn btn-primary" onClick={handleClick} type="button">Add</button>
      <button class="btn btn-danger" onClick={handleCompletedTodos} type="button">Delete-Selected</button>
      </div>
      <div className="mx-auto">
      <p>{todos.filter(todo => !todo.completed).length} todo left</p>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      </div>
    </div>
    
      
  );
};

export default App;
