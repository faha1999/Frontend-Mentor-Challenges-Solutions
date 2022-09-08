import React from 'react';
import { aboutData } from '../data/aboutData';
import bgMiddle from '../assets/images/bg-tablet-pattern.svg';

export const About = () => {
  return (
    <>
      <section className="container about">
        <div className="row">
          <div className="col-md-6 col-sm-12 left">
            <h2>What’s different about Manage?</h2>
            <p>
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>

          <div className="col-md-6 col-sm-12 right">
            {aboutData.map((data) => (
              <div className="feature" key={data.id}>
                <div className="header mb-3">
                  <span className="me-5">{data.id}</span>
                  <h3 className="mt-3">{data.title}</h3>
                </div>

                <p>{data.details}</p>
              </div>
            ))}
          </div>
        </div>

        <img src={bgMiddle} alt="bgMiddle" />
      </section>
    </>
  );
};
