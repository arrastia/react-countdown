import React, { useRef } from 'react';

import styles from './NotifyMe.module.scss';

export const NotifyMe = () => {
  const inputRef = useRef(null);
  const checkboxRef = useRef(null);

  const onCloseNotifyMe = () => (document.getElementById('checkbox').checked = false);

  const onFocusInput = () => inputRef.current.focus();

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
          <label className={styles.buttonLabel} htmlFor="checkbox">
            <button className={styles.button} type="button">
              Send
            </button>
          </label>
          <label className={styles.label} htmlFor="checkbox" data-title="Notify me" />
        </form>
      </div>
    </>
  );
};
