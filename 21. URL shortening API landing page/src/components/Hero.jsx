import React from 'react';
import working from '../assets/images/illustration-working.svg';

export const Hero = () => {
  return (
    <div className="hero">
      <div className="container-fluid container-md">
        <div className="row align-items-end align-items-md-center">
          <div className="col-sm-6 col-md-6 order-sm-2 order-md-2 d-block">
            <img src={working} alt="working" />
          </div>
          <div className="col-sm-6 col-md-6">
            <h1 className="mb-1">More than just shorter links</h1>
            <p className="mb-4">
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="btn btn-info rounded-pill d-block mx-auto mx-sm-0">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
