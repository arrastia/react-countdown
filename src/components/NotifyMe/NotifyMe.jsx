import React, { useRef } from 'react';

import styles from './NotifyMe.module.scss';

import { useLocalStorage } from 'tools/Hooks/useLocalStorage';

export const NotifyMe = () => {
  const inputRef = useRef(null);
  const checkboxRef = useRef(null);

  const [isNotified, setIsNotified] = useLocalStorage('is-notified', false);

  const onCloseNotifyMe = () => (document.getElementById('checkbox').checked = false);

  const onFocusInput = () => inputRef.current.focus();

  const onNotifyMe = () => {
    if (inputRef.current.checkValidity()) {
      setIsNotified(true);
    }
  };

  return (
    <>
      <input id="checkbox" className={styles.checkbox} type="checkbox" onClick={() => onFocusInput()} />
      <div className={styles.formContainer}>
        <form className={styles.form} action="">
          <input
            className={styles.input}
            // onBlur={() => onCloseNotifyMe()}
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
            placeholder="E-mail"
            ref={inputRef}
            required
          />
          <label className={styles.buttonLabel} htmlFor="checkbox" onClick={() => onNotifyMe()}>
            <button className={styles.button} type="button">
              Send
            </button>
          </label>
          <label
            className={styles.label}
            data-title={!isNotified ? 'Notify me' : 'Thank You'}
            htmlFor="checkbox"
            style={{ pointerEvents: isNotified ? 'none' : 'all' }}
          />
        </form>
      </div>
    </>
  );
};
