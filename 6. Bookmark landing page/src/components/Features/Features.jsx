import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { featuresData } from '../../data/featuresData';

export const Features = () => {
  return (
    <>
      <section className="container features">
        <div className="row">
          <div className="col-12 heading">
            <h1>Features</h1>
            <p>
              Our aim is to make it quick and easy for you to access your
              favourite websites. Your bookmarks sync between your devices so
              you can access them on the go.
            </p>
          </div>

          <div className="col-12 content pt-4">
            <Tabs
              defaultActiveKey="bookmark"
              id="justify-tab-example"
              className="mb-3"
              justify
            >
              {featuresData.map((data) => (
                <Tab
                  className="pt-4"
                  eventKey={data.key}
                  title={data.title}
                  key={data.key}
                >
                  <div className="row">
                    <div className="col-md-6 col-sm-12 image">
                      <img src={data.img} alt={data.title} />
                    </div>
                    <div className="col-md-6 col-sm-12 contentBody">
                      <h1>{data.title}</h1>
                      <p>{data.details}</p>
                      <button className="mt-3">{data.button}</button>
                    </div>
                  </div>
                </Tab>
              ))}
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};
