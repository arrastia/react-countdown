import React, { useContext, useEffect, useState } from 'react';

import styles from './Countdown.module.scss';

import { LanguageContext } from 'tools/Contexts/LanguageContext';
import { TranslationsContext } from 'tools/Contexts/TranslationsContext';

import { CountdownUtils } from './.tools/Utils/CountdownUtils';

export const Countdown = () => {
  const language = useContext(LanguageContext);
  const translation = useContext(TranslationsContext);

  const [timeLeft, setTimeLeft] = useState(CountdownUtils.calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(CountdownUtils.calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <li className={styles.items}>
        <span id={interval} className={styles.time}>
          {timeLeft[interval]}
        </span>
        {language[translation.selected][interval]}
      </li>
    );
  });

  return (
    <>
      {timerComponents.length ? (
        <ul className={styles.wrap}>{timerComponents}</ul>
      ) : (
        <span className={styles.timeOver}>{language[translation.selected]['timeOver']}</span>
      )}
    </>
  );
};
