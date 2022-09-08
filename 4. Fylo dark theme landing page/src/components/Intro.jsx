import React from 'react';
import IntroImage from '../assets/images/illustration-intro.png';

export const Intro = () => {
  return (
    <>
      <section className="main grid">
        <div className="intro">
          <div className="container grid">
            <div className="introImage">
              <img src={IntroImage} alt="Intro illustration" />
            </div>

            <div className="introContent">
              <h1 className="introContentHeading">
                All your files in one secure location, accessible anywhere.
              </h1>
            </div>
          </div>
        </div>

        <div className="contentWrapper">
          <p className="introContentDetails">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <div className="cta">
            <a href="/" className="btn">
              Get Started
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
