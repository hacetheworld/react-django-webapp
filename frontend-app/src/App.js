import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import './App.css'
function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/todos/');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const toggleComplete = async (id) => {
    try {
      const response = await axios.patch(`http://127.0.0.1:8000/api/todos/${id}/`, {
        completed: !todos.find((todo) => todo.id === id).completed,
      });
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, completed: response.data.completed } : todo
        )
      );
    } catch (error) {
      console.error('Error toggling completion:', error);
    }
  };

  const addTodo = async (text) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/todos/', {
        text,
      });
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/todos/${id}/`);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div className="App">
      <h1 className="App-header">ToDo App</h1>
      <div className="center-content">
        <AddTodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
