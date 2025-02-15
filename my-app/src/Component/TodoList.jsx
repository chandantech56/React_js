import React from "react";


import { useState } from 'react'

function TodoList () {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

function handleChange(e){
  setInputValue(e.target.value)
}

function handleSubmit(e){
  e.preventDefault()
  setTodos([...todos, inputValue])
  setInputValue('')
}

function handleDelete(index){
  const newTodos = [...todos]
  newTodos.splice(index, 1)
  setTodos(newTodos)
}
  return (
    <div>
      <h1>Todo List</h1>
      
      <form>
        <input type='text' value={inputValue} onChange={handleChange}/>
        <button onClick={handleSubmit}>Add Todo</button>
      </form>
      <ul style={{color:"black", display:"block"}}>
        {todos.map((todo, index) => (
          <li key={index}>{todo}
          {/* delete button */}
          <button onClick={() =>handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList;