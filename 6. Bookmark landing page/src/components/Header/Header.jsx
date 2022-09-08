import React, { useState } from 'react';
import logo from '../../assets/images/logo-bookmark.svg';
import logoMobile from '../../assets/images/logo-bookmark-mobile.svg';
import hamburger from '../../assets/images/icon-hamburger.svg';
import close from '../../assets/images/icon-close.svg';
import facebook from '../../assets/images/icon-facebook.svg';
import twitter from '../../assets/images/icon-twitter.svg';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-md pt-5 pb-4">
        <div className="container">
          <a className={`${isOpen ? 'd-none' : ' navbar-brand'}`} href="#">
            <img src={logo} alt="logo" />
          </a>

          <div className="navMenu ms-auto">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item me-4">
                <a className="nav-link" aria-current="page" href="#">
                  FEATURES
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="#">
                  PRICING
                </a>
              </li>
              <li className="nav-item me-4">
                <a href="#" className="nav-link">
                  CONTACT
                </a>
              </li>
            </ul>

            <button>LOGIN</button>
          </div>

          <div className={`${isOpen ? 'd-none ' : 'togglerButton'}`}>
            {isOpen ? (
              ''
            ) : (
              <button onClick={() => setIsOpen(true)}>
                <img src={hamburger} alt="hamburger" />
              </button>
            )}
          </div>

          <div className={`${isOpen ? 'mobileNav' : 'd-none'}`}>
            <div className="d-fixed">
              <div className="mobileLogo">
                <div className="logo">
                  <img src={logoMobile} alt="logoMobile" />
                </div>

                <button className="ms-auto" onClick={() => setIsOpen(false)}>
                  <img className="close" src={close} alt="close" />
                </button>
              </div>
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item me-4">
                  <a className="nav-link" aria-current="page" href="#">
                    FEATURES
                  </a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link" href="#">
                    PRICING
                  </a>
                </li>
                <li className="nav-item me-4">
                  <a href="#" className="nav-link">
                    CONTACT
                  </a>
                </li>
              </ul>

              <div className="logIn">
                <button>LOGIN</button>
              </div>

              <div className="social-icons">
                <img className="me-5" src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
