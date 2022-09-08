import React from 'react';
import logo from '../assets/images/logo.svg';
import location from '../assets/images/icon-location.svg';
import phone from '../assets/images/icon-phone.svg';
import email from '../assets/images/icon-email.svg';
import facebook from '../assets/images/facebook.svg';
import instagram from '../assets/images/instagram.svg';
import twitter from '../assets/images/twitter.svg';

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="form-section grid">
            <h4>Get early access today</h4>
            <p className="unique">
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
            <form className="form grid">
              <input type="email" placeholder="email@example.com" />
              <button className="btn-large btn">Get Started For Free</button>
            </form>
          </div>

          <div className="grid">
            <div className="logo">
              <img src={logo} alt="Fylo Logo" />
            </div>

            <div className="footerContainer grid">
              <div className="location">
                <div>
                  <img src={location} alt="location" />
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
              </div>

              <div className="contactInfo">
                <div className="phone">
                  <div>
                    <img src={phone} alt="phone" />
                  </div>
                  <div>
                    <p>+1-543-123-4567</p>
                  </div>
                </div>
                <div className="mail">
                  <div>
                    <img src={email} alt="email" />
                  </div>
                  <div>
                    <p>example@fylo.com</p>
                  </div>
                </div>
              </div>

              <div>
                <ul className="pages">
                  <li>
                    <a href="foo" className="pageLink">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="foo" className="pageLink">
                      Jobs
                    </a>
                  </li>
                  <li>
                    <a href="foo" className="pageLink">
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="foo" className="pageLink">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="pages">
                  <li>
                    <a href="foo" className="pageLink">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="foo" className="pageLink">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="foo" className="pageLink">
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>

              <div className="social-links">
                <ul className="socials">
                  <li className="social">
                    <a href="foo" className="socialLink">
                      <img src={facebook} alt="facebook" />
                    </a>
                  </li>

                  <li className="social ">
                    <a href="foo" className="socialLink">
                      <img src={twitter} alt="facebook" />
                    </a>
                  </li>

                  <li className="social ">
                    <a href="foo" className="socialLink">
                      <img src={instagram} alt="facebook" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
