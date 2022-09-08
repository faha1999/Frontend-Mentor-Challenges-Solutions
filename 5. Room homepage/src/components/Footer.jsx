import React from 'react';

export const Footer = () => {
  return (
    <>
      <footer className="bg-slate-900 text-slate-50 p-6 text-center">
        <div className="attribution">
          Challenge by{' '}
          <a
            className="text-orange-500 duration-500 hover:text-amber-200"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by
          <a
            className="text-orange-500 duration-500 hover:text-amber-200"
            href="https://github.com/faha1999/"
          >
            faha1999
          </a>
          .
        </div>
      </footer>
    </>
  );
};
