import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
    return (
        <div className="todo-list-container">
          <ul>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                item={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
              />
            ))}
          </ul>
        </div>
      );
};

export default TodoList;
