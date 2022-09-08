import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const NewsLetter = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <section className="NewsLetter">
        <div className="container">
          <div className="row content">
            <div className="col-12">
              <p>35,000+ ALREADY JOINED</p>
              <h1>Stay up-to-date with what we’re doing</h1>
            </div>

            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className="col-12 mt-4"
            >
              <Form.Group controlId="validationCustomUsername">
                <InputGroup hasValidation>
                  <Form.Control
                    type="email"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Whoops, make sure it's an email.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <button type="submit">Contact Us</button>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
};
