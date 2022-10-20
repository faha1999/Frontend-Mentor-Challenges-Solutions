import React from 'react';
import { Link } from 'react-router-dom';
import Toggle from './partials/Toggler';

export const Header = () => {
  return (
    <>
      <header style={{ position: 'sticky', top: '0' }}>
        <nav>
          <Link to="/">
            <h1>Where in the world?</h1>
          </Link>
          <Toggle />
        </nav>
      </header>
    </>
  );
};
