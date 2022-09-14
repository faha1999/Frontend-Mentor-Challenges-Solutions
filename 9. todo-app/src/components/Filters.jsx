import React, { useContext, useState } from 'react';
import todoContext from '../utilities/TodoContext';

export const Filters = ({ setFilter }) => {
  const { filter, handleFilter } = useContext(todoContext);
  const handleClick = (e) => {
    handleFilter(e.target.innerText);
  };

  return (
    <div className="todo-filter">
      <p className={filter === 'All' ? 'active' : ''} onClick={handleClick}>
        All
      </p>
      <p className={filter === 'Active' ? 'active' : ''} onClick={handleClick}>
        Active
      </p>
      <p
        className={filter === 'Completed' ? 'active' : ''}
        onClick={handleClick}
      >
        Completed
      </p>
    </div>
  );
};
