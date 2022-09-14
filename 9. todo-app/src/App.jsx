import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Filters } from './components/Filters';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ToDoContainer } from './components/ToDoContainer';
import { TodoInput } from './components/TodoInput';
import { lightTheme, darkTheme, GlobalStyles } from './theme/Theme';
import { TodoProvider } from './utilities/TodoContext';

export const App = () => {
  const savedTheme =
    localStorage.getItem('theme') != null
      ? localStorage.getItem('theme')
      : 'dark';

  const [theme, setTheme] = useState(savedTheme);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const themeToggler = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyles />
        <main className="toDoContainer">
          <Header themeToggler={themeToggler} theme={theme} />
          <div className="container">
            <TodoProvider>
              <TodoInput />
              <ToDoContainer />
            </TodoProvider>
          </div>

          <Footer />
        </main>
      </ThemeProvider>
    </>
  );
};
