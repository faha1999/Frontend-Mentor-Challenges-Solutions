import React from 'react';
import logo from '../../assets/images/logo-bookmark-mobile.svg';
import facebook from '../../assets/images/icon-facebook.svg';
import twitter from '../../assets/images/icon-twitter.svg';

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3 logo">
              <img src={logo} alt="logo" />
            </div>

            <div className="col-md-6 Links">
              <a href="#">FEATURES</a>
              <a href="#">PRICING</a>
              <a href="#">CONTACT</a>
            </div>

            <div className="col-md-3 socialIcons">
              <div className="icons">
                <img className="me-5" src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
              </div>
            </div>
          </div>

          <div className="pt-5 attribution text-center">
            Challenge by{' '}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="https://github.com/faha1999/">faha1999</a>.
          </div>
        </div>
      </footer>
    </>
  );
};
