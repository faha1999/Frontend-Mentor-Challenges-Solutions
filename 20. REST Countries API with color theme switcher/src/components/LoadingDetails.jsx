import React from 'react';

export const LoadingDetails = () => {
  return (
    <div className="loading-details">
      <div className="loading-details--flag"></div>
      <div className="loading-details--details">
        <div className="heading"></div>
        <div className="loading-details--details--columns">
          <div className="loading-details--details--columns--column">
            <div className="row"></div>
            <div className="row"></div>
            <div className="row"></div>
            <div className="row"></div>
            <div className="row"></div>
          </div>
          <div className="loading-details--details--columns--column">
            <div className="row"></div>
            <div className="row"></div>
            <div className="row"></div>
          </div>
        </div>
        <div className="loading-details--details--borders">
          <div className="button"></div>
          <div className="button"></div>
          <div className="button"></div>
        </div>
      </div>
    </div>
  );
};
