import React from 'react';

export const Count = (props) => {
  return (
    <>
      <div className="card">
        <span className="number">
          <span className="topNumber" />
          {props.count}
        </span>
        <p>{props.time}</p>
      </div>
    </>
  );
};
