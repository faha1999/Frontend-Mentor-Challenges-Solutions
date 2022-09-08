import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import close from '../assets/images/icon-close.svg';
import hamburger from '../assets/images/icon-hamburger.svg';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="container">
        <div className={isOpen ? 'overlay' : ''}></div>
        <nav>
          <div className="mobile">
            <img
              width="100%"
              height="100%"
              src={logo}
              alt="manage"
              className="logo"
            />

            <div className="togglerIcon">
              {isOpen ? (
                <img
                  src={close}
                  width="100%"
                  height="100%"
                  alt="close"
                  onClick={toggle}
                />
              ) : (
                <img
                  src={hamburger}
                  width="100%"
                  height="100%"
                  alt="open"
                  onClick={toggle}
                />
              )}
            </div>
          </div>

          <div className={isOpen ? 'items' : 'items hide'}>
            <a href="#">Pricing</a>
            <a href="#">Product</a>
            <a href="#">About us</a>
            <a href="#">Careers</a>
            <a href="#">Community</a>
          </div>

          <div>
            <button className="navBtn">Get Started</button>
          </div>
        </nav>
      </div>
    </>
  );
};
