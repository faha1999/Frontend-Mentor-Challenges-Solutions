import { createContext, useState, useEffect } from 'react';

const todoContext = createContext();

const getTodoList = () => {
  let todoList = localStorage.getItem('todo-list');
  if (!todoList) return [];
  else return JSON.parse(todoList);
};

export const TodoProvider = ({ children }) => {
  getTodoList();
  const [todos, setTodos] = useState(getTodoList());
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    localStorage.setItem('todo-list', JSON.stringify(todos));
  }, [todos]);

  function addTodo(item) {
    let flag = true;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].text === item.text) {
        flag = false;
        break;
      }
    }
    if (flag !== false) {
      setTodos([item, ...todos]);
    }
  }

  function clearTodo(item) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.text !== item));
  }

  function setCompleted(item) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.text === item) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    );
  }

  function clearCompleted() {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.completed !== true),
    );
  }

  function handleFilter(item) {
    setFilter(item);
  }

  return (
    <todoContext.Provider
      value={{
        todos,
        filter,
        setTodos,
        addTodo,
        setCompleted,
        clearTodo,
        clearCompleted,
        handleFilter,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};

export default todoContext;
