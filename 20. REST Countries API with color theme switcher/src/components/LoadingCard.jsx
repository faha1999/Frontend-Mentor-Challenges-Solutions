import React from 'react';

export const LoadingCard = () => {
  return (
    <div className="loading-card">
      <div className="loading-card--flag"></div>
      <div className="loading-card--details">
        <div className="loading-card--details-heading"></div>
        <div className="loading-card--details--other">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
