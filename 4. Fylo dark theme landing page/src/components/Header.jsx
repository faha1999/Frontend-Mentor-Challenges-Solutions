import React from 'react';
import logo from '../assets/images/logo.svg';

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="logo">
            <img src={logo} alt="Fylo Logo" />
          </h1>

          <nav className="nav">
            <ul className="navList">
              <li className="navItem">
                <a href="foo" className="navLink">
                  Features
                </a>
              </li>

              <li className="navItem">
                <a href="foo" className="navLink">
                  Team
                </a>
              </li>

              <li className="navItem">
                <a href="foo" className="navLink">
                  Sign In
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
