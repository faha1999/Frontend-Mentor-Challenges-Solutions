import React, { useContext } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import todoContext from '../utilities/TodoContext';
import CrossIcon from '../assets/images/icon-cross.svg';

export const ToDo = ({ todoText, completed, index, id }) => {
  const { setCompleted, clearTodo } = useContext(todoContext);

  const handleClick = (e) => {
    setCompleted(e.target.nextElementSibling.innerText);
  };

  const handleDelete = (e) => {
    clearTodo(e.target.previousElementSibling.innerText);
  };

  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <div
          className={`todo${completed ? ' completed' : ''}`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          data-index={index}
        >
          <div
            className={`circle${completed ? ' circle-gradient' : ''}`}
            onClick={handleClick}
          ></div>
          <p className="todo-text">{todoText}</p>
          <img src={CrossIcon} alt="cross" onClick={handleDelete} />
        </div>
      )}
    </Draggable>
  );
};
