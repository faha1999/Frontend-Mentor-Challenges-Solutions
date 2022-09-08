import React from 'react';
import { FeaturesData } from '../data/FeaturesData';

export const Features = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="capabilities grid">
            {FeaturesData.map((data) => (
              <div className="capability grid" key={data.title}>
                <div className="im">
                  <img src={data.img} alt={data.title} />
                </div>
                <div className="wrap">
                  <h3>{data.title}</h3>
                  <p>{data.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
