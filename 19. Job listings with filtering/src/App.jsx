import React from 'react';
import { ThemeProvider } from 'styled-components';
import { DecoImage } from './components/DecoImage/DecoImage';
import { Footer } from './components/footer/Footer';
import { JobCardList } from './components/JobCardList/JobCardList';
import { ContextProvider } from './Context';
import { darkTheme, lightTheme } from './themes/Themes';
import useTheme from './themes/UseTheme';

export const App = () => {
  const [theme, toggleTheme] = useTheme();
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <ContextProvider>
        <DecoImage theme={theme} toggleTheme={toggleTheme} />
        <JobCardList />
        <Footer />
      </ContextProvider>
    </ThemeProvider>
  );
};
