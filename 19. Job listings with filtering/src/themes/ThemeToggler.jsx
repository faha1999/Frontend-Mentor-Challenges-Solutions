import React from 'react';
import styled, { keyframes } from 'styled-components';

const Button = styled.button`
  background: ${({ theme }) => theme.cardBg};
`;

const grow = keyframes`
  from{
    transform: scale(0.5)
  }
  to{
    transform: scale(1)
  }
`;

const rotate = keyframes`
  from{
    transform: scale(0.5) rotate(0deg)
  }
  to{
    transform: scale(1) rotate(360deg)
  }
`;

const Icon = styled.span`
  animation: ${grow} 0.2s ease-out forwards;
`;
Icon.displayName = 'Icon';

const SunIcon = styled.span`
  animation: ${rotate} 0.2s ease-out forwards;
`;
SunIcon.displayName = 'SunIcon';

export const ThemeToggler = ({ theme, toggleTheme }) => {
  return (
    <>
      <Button
        className="themeToggler"
        title="Theme Toggler"
        onClick={toggleTheme}
      >
        {theme === 'light' && <Icon>🌖</Icon>}
        {theme === 'dark' && <SunIcon>🔅</SunIcon>}
      </Button>
    </>
  );
};
