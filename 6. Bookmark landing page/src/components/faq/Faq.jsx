import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { faqsData } from '../../data/faqData';

export const Faq = () => {
  return (
    <>
      <section className="container faq">
        <div className="row">
          <div className="col-12">
            <div className="heading">
              <h1>Frequently Asked Questions</h1>
              <p>
                Here are some of our FAQs. If you have any other questions you’d
                like answered please feel free to email us.
              </p>
            </div>

            <div className="faqContent mt-5">
              <div className="col-12">
                <Accordion defaultActiveKey="1">
                  {faqsData.map((data) => (
                    <Accordion.Item eventKey={data.key} key={data.key}>
                      <Accordion.Header>{data.title}</Accordion.Header>
                      <Accordion.Body>{data.details}</Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <button className="btn mt-5">More Info</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
