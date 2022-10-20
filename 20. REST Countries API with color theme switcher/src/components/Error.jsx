import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const Error = ({ link }) => {
  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="error">
      <div className="error--information">
        <h1>
          Oops<span>!</span>
        </h1>
        <p>
          No Country with this name exists. We suggest you to go back to home.
          😉
        </p>
        {link ? (
          <Link to="/">
            <button>
              <BsArrowLeft style={{ marginLeft: '5px' }} /> Back To Home
            </button>
          </Link>
        ) : (
          <button onClick={reload}>
            <BsArrowLeft style={{ marginLeft: '5px' }} /> Back To Home
          </button>
        )}
      </div>
    </div>
  );
};
