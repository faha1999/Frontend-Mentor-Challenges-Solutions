import { v4 as uuidv4 } from 'uuid';
import React, { useContext, useState } from 'react';
import todoContext from '../utilities/TodoContext';

export const TodoInput = () => {
  const [text, setText] = useState('');
  const { addTodo } = useContext(todoContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text !== '') {
      addTodo({
        id: uuidv4(),
        completed: false,
        text,
      });
      setText('');
    }
  };

  return (
    <>
      <div className="TodoInputWrapper">
        <form onClick={handleSubmit}>
          <div className="todoInput">
            <button className="addBtn">Add</button>
            <input
              type="text"
              placeholder="Create a new todo"
              value={text}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </>
  );
};
