import React from 'react';

const TodoItem = ({ item, toggleComplete, deleteTodo }) => {
    return (
        <li className="todo-item">
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => toggleComplete(item.id)}
          />
          <span className="todo-text">{item.text}</span>
          <button className="delete-button" onClick={() => deleteTodo(item.id)}>
            Delete
          </button>
        </li>
      );
};

export default TodoItem;
