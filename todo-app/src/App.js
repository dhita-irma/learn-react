import React, { useState, useEffect } from 'react';
import './App.css';

import Form from './components/Form'
import TodoList from './components/TodoList';


function App() {

  // States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilterdTodos] = useState([]);
  
  // Run once when the app start 
  useEffect(() => {
    getLocalTodos();
  }, []);

  // useEffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilterdTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilterdTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilterdTodos(todos);
        break;
    }
  };

  // Save to local storage
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Dhita's Todo List</h1>
      </header>
      <Form 
        inputText={inputText} 
        setInputText={setInputText}
        todos={todos} 
        setTodos={setTodos}
        setStatus={setStatus} />
      <TodoList 
        todos={todos} 
        setTodos={setTodos}
        filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
