import React, { useState } from 'react';

import { ReactComponent as SunIcon } from '../assets/images/icon-sun.svg';
import { ReactComponent as MoonIcon } from '../assets/images/icon-moon.svg';

export const Header = (props) => {
  const [rotate, setRotate] = useState(false);

  const clickHandler = () => {
    props.themeToggler();
    setRotate(true);
    setTimeout(() => {
      setRotate(false);
    }, 1000);
  };

  return (
    <>
      <header>
        <h1>Todo</h1>
        <button
          aria-label="theme-btn"
          className={`theme-btn ${rotate ? 'rotate' : ''}`}
          onClick={clickHandler}
        >
          {props.theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </header>
    </>
  );
};
