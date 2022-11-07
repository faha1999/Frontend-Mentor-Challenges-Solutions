import React from 'react';
import logo from '../assets/images/logo.svg';

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <img className="navbar-logo" src={logo} alt="logo" />
        <button
          className="navbar-toggler p-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Resources
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <button className="btn btn-outline-info rounded-pill me-0 me-lg-2">
              Login
            </button>
            <button className="btn btn-info rounded-pill">Sign Up</button>
          </form>
        </div>
      </div>
    </nav>
  );
};
