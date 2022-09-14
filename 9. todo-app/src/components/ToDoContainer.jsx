import React from 'react';
import { ToDo } from './ToDo';
import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import todoContext from '../utilities/TodoContext';
import { TodoStats } from './TodoStats';

export const ToDoContainer = () => {
  const { todos, setTodos, filter } = useContext(todoContext);
  let todoEl;
  if (filter === 'All') {
    todoEl = todos.map((todo, index) => (
      <ToDo
        key={uuidv4()}
        id={todo.id}
        todoText={todo.text}
        completed={todo.completed}
        index={index}
      />
    ));
  } else if (filter === 'Active') {
    todoEl = todos.map((todo, index) => {
      if (todo.completed === false)
        return (
          <ToDo
            key={uuidv4()}
            id={todo.id}
            todoText={todo.text}
            completed={todo.completed}
            index={index}
          />
        );
      return null;
    });
  } else {
    todoEl = todos.map((todo, index) => {
      if (todo.completed !== false)
        return (
          <ToDo
            key={uuidv4()}
            id={todo.id}
            todoText={todo.text}
            completed={todo.completed}
            index={index}
          />
        );
      return null;
    });
  }

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTodos(items);
  }

  if (todos.length === 0) return <h2 className="no-todo">No Todos Yet!</h2>;

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="todoContainer"
            >
              {todoEl}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {todos.length > 0 && <TodoStats />}
    </>
  );
};
