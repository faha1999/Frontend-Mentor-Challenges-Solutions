import React, { useContext } from 'react';
import todoContext from '../utilities/TodoContext';
import { Filters } from './Filters';

export const TodoStats = () => {
  const { todos, clearCompleted } = useContext(todoContext);
  const todoCompleted = () => {
    let completed = 0;
    todos.forEach((todo) => {
      if (todo.completed) completed += 1;
    });
    return completed;
  };
  return (
    <div className="todo-stats">
      <div className="todo-left">
        {todos.length - todoCompleted()} items left
      </div>
      <Filters />
      <div className="clear-completed" onClick={clearCompleted}>
        Clear Completed
      </div>
    </div>
  );
};
