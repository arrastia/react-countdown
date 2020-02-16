import React, { useEffect, useState } from 'react';

import './Countdown.css';

export const Countdown = () => {
  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const calculateTimeLeft = () => {
    const difference = new Date('2020-5-25') - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: ('0' + Math.floor(difference / (1000 * 60 * 60 * 24))).slice(-2),
        hours: ('0' + Math.floor((difference / (1000 * 60 * 60)) % 24)).slice(-2),
        minutes: ('0' + Math.floor((difference / 1000 / 60) % 60)).slice(-2),
        seconds: ('0' + Math.floor((difference / 1000) % 60)).slice(-2)
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <li className="countdown-items">
        <span id={interval} className="countdown-time">
          {timeLeft[interval]}
        </span>
        {interval}
      </li>
    );
  });

  return (
    <>
      {timerComponents.length ? (
        <ul className="countdown-wrap">{timerComponents}</ul>
      ) : (
        <span className="time-over">time is over</span>
      )}
    </>
  );
};
