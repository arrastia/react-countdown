import React, { useRef } from 'react';

import styles from './NotifyMe.module.scss';

import { useLocalStorage } from 'tools/Hooks/useLocalStorage';
import { useOnClickOutside } from 'tools/Hooks/useOnClickOutside';

export const NotifyMe = () => {
  const checkboxRef = useRef(null);
  const formRef = useRef(null);
  const inputRef = useRef(null);

  const [isNotified, setIsNotified] = useLocalStorage('is-notified', false);
  useOnClickOutside(formRef, () => onCloseNotifyMe());

  const onCloseNotifyMe = () => (checkboxRef.current.checked = false);

  const onFocusInput = () => inputRef.current.focus();

  const onNotifyMe = () => {
    if (inputRef.current.checkValidity()) {
      setIsNotified(true);
    }
  };

  return (
    <>
      <input id="checkbox" className={styles.checkbox} ref={checkboxRef} type="checkbox" />
      <div className={styles.formContainer}>
        <form action="" className={styles.form} ref={formRef}>
          <input
            className={styles.input}
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
            onClick={() => onFocusInput()}
            style={{ pointerEvents: isNotified ? 'none' : 'all' }}
          />
        </form>
      </div>
    </>
  );
};
