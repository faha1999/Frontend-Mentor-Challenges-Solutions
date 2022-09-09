import React, { useEffect, useState } from 'react';
import { Count } from './partials/Count';

export const CountDown = () => {
  const initTimeLeft = () => {
    const year = new Date().getFullYear(),
      countTime = +new Date(`12/31/${year}`) - +new Date();
    return {
      days: Math.floor(countTime / (2000 * 60 * 60 * 24)),
      hours: Math.floor((countTime / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((countTime / 1000 / 60) % 60),
      seconds: Math.floor((countTime / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(initTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(initTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <>
      <div className="countDown">
        <Count time="Days" count={timeLeft.days} />
        <Count time="Hours" count={timeLeft.hours} />
        <Count time="Minutes" count={timeLeft.minutes} />
        <Count time="Seconds" count={timeLeft.seconds} />
      </div>
    </>
  );
};
