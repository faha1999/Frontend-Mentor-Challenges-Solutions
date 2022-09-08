import React from 'react';
import stayProductive from '../assets/images/illustration-stay-productive.png';
import arrow from '../assets/images/icon-arrow.svg';

export const Productive = () => {
  return (
    <>
      <section className="productive">
        <div className="container grid">
          <div>
            <img src={stayProductive} alt="stayProductive" />
          </div>

          <div className="content wrap">
            <h2>Stay productive, wherever you are</h2>
            <p>
              Never let your location be an issue when accessing your files.
              Fylo has you covered for all of your file storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>

            <a href="foo" className="underline">
              <span>See how Fylo works</span>
              <span>
                <img src={arrow} alt="arrow" />
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
