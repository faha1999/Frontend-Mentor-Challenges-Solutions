import { createGlobalStyle } from 'styled-components';

const darkTheme = {
  text: 'hsl(234, 39%, 85%)',
  bodyBackground: 'hsl(235, 21%, 11%)',
  todoBackground: 'hsl(235, 24%, 19%)',
  todoBorder: 'hsl(237, 14%, 26%)',
  checkboxBorder: 'hsl(234, 11%, 52%)',
  placeholderAndCompletedTask: 'hsl(234, 11%, 52%)',
  clearCompletedBtnHover: 'hsl(234, 39%, 85%)',
  filtersBtnHover: 'hsl(236, 33%, 92%)',
};

const lightTheme = {
  text: 'hsl(235, 21%, 11%)',
  bodyBackground: 'hsl(236, 33%, 92%)',
  todoBackground: 'hsl(0, 0%, 98%)',
  todoBorder: 'hsl(233, 11%, 84%)',
  checkboxBorder: 'hsl(236, 9%, 61%)',
  placeholderAndCompletedTask: 'hsl(236, 9%, 61%)',
  clearCompletedBtnHover: 'hsl(235, 19%, 35%)',
  filtersBtnHover: 'hsl(235, 21%, 11%)',
};

const GlobalStyles = createGlobalStyle`

	body {
		background-color: ${(props) => props.theme.bodyBackground};
	}

  .todoInput,
  .todo-stats,
  .todoContainer::-webkit-scrollbar-track, .attribution p{
    background: ${(props) => props.theme.todoBackground};
  }
  
  .addBtn{
    border: 1px solid ${(props) => props.theme.checkboxBorder};
  }
  
  .todoInput input, .todo p, .no-todo , .no-todo:after, .todo-stats, .attribution p{
    color: ${(props) => props.theme.text}
  }
  
  .todoInput input::placeholder,
  .completed p,
  .drag-drop-line{
    color: ${(props) => props.theme.placeholderAndCompletedTask}
  }

  .todo{
    background: ${(props) => props.theme.todoBackground};
    color: ${(props) => props.theme.text};
    border-bottom: 2px solid ${(props) => props.theme.todoBorder};
  }

  .todo-filter p:focus,
  .todo-filter p:hover, .clear-completed:hover{
    color: ${(props) => props.theme.filtersBtnHover};
  }

  .todoContainer{
    scrollbar-color: hsl(233, 13%, 49%) ${(props) =>
      props.theme.todoBackground};
  }

  @media (max-width: 600px) {
    .todo-filter{
      background: ${(props) => props.theme.todoBackground};
    }
  }
`;

export { darkTheme, lightTheme, GlobalStyles };
