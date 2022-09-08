import React from 'react';
import { downloadData } from '../../data/downloadData';
import border from '../../assets/images/bg-dots.svg';

export const Download = () => {
  return (
    <>
      <section className="container download mt-5 mb-5">
        <div className="row">
          <div className="col-12 heading">
            <h1>Download the extension</h1>
            <p>
              We’ve got more browsers in the pipeline. Please do let us know if
              you’ve got a favourite you’d like us to prioritize.
            </p>
          </div>

          <div className=" row cardContainer mt-5">
            {downloadData.map((data) => (
              <div className="col-md-4 col-sm-12 downloadCard" key={data.title}>
                <img className="mt-5" src={data.img} alt={data.title} />
                <h3 className="mt-3">{data.title}</h3>
                <p className="mt-2 mb-5">{data.version}</p>
                <img src={border} alt="cardBorder" className="cardBorder" />
                <button className="mt-4 mb-4">{data.button}</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
