import { useState, useEffect } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const saveToLSandSetTheme = (theme) => {
    localStorage.setItem('theme', theme);
    setTheme(theme);
  };

  const toggleTheme = () => {
    theme === 'light'
      ? saveToLSandSetTheme('dark')
      : saveToLSandSetTheme('light');
  };

  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      const prefersDarkMode = matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      if (prefersDarkMode) setTheme('dark');
      console.log('effect');
    }
  }, []);

  return [theme, toggleTheme];
};

export default useTheme;
