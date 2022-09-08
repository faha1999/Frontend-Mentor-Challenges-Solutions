import React from 'react';
import { testimonialsData } from '../data/testimonialsData';
import quote from '../assets/images/bg-quotes.png';

export const Testimonials = () => {
  return (
    <>
      <section className="testimonials">
        <div className="container">
          <div className="quote">
            <img src={quote} alt="quote" />
          </div>

          <ul className="card">
            {testimonialsData.map((data) => (
              <li className="testimonial grid" key={data.name}>
                <p>{data.details}</p>

                <div className="info">
                  <div className="img">
                    <img src={data.img} alt="{data.name}" />
                  </div>
                  <div className="basicInfo">
                    <h5>{data.name}</h5>
                    <p>{data.title}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
