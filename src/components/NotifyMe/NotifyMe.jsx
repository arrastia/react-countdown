import React, { useContext, useRef, useState } from 'react';

import emailjs from 'emailjs-com';

import styles from './NotifyMe.module.scss';

import { useLocalStorage } from 'tools/Hooks/useLocalStorage';
import { useOnClickOutside } from 'tools/Hooks/useOnClickOutside';

import { LanguageContext } from 'tools/Contexts/LanguageContext';
import { NotificationContext } from 'tools/Contexts/NotificationContext';
import { TranslationsContext } from 'tools/Contexts/TranslationsContext';

export const NotifyMe = () => {
  const language = useContext(LanguageContext);
  const translation = useContext(TranslationsContext);
  const notification = useContext(NotificationContext);

  const [email, setEmail] = useState();

  const checkboxRef = useRef(null);
  const formRef = useRef(null);
  const inputRef = useRef(null);

  const [isNotified, setIsNotified] = useLocalStorage('is-notified', false);
  useOnClickOutside(formRef, () => onCloseNotifyMe());

  const onCloseNotifyMe = () => (checkboxRef.current.checked = false);

  const onFocusInput = () => inputRef.current.focus();

  const onNotifyMe = event => {
    if (inputRef.current.checkValidity()) {
      notification.add({
        type: 'SEND_EMAIL_INFO'
      });
      event.preventDefault();
      let templateParams = {
        from_name: 'arrastia1996@gmail.com',
        to_name: 'Arrastia',
        subject: `${email}'s notification`,
        message_html: email
      };
      emailjs
        .send('gmail', /* 'template_yg7YSVyl', */ templateParams, 'user_XU4Y38mEGpTRJE2F2U9V1')
        .then(
          response => {
            console.log('response', response);
            if (response.status >= 200 && response.status <= 299) {
              console.log('okey');
              setIsNotified(true);
              notification.add({
                type: 'SEND_EMAIL_SUCCESS'
              });
            }
          },
          error => {
            console.log('error', error);
            notification.add({
              type: 'SEND_EMAIL_ERROR'
            });
          }
        )
        .finally(() => onCloseNotifyMe());
    }
  };

  // useEffect(() => {
  //   setIsNotified(false);
  // }, []);

  return (
    <>
      <input id="checkbox" className={styles.checkbox} ref={checkboxRef} type="checkbox" />
      <div className={styles.formContainer}>
        <form action="" className={styles.form} ref={formRef}>
          <input
            className={styles.input}
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
            placeholder={language[translation.selected]['email']}
            ref={inputRef}
            onChange={event => setEmail(event.target.value)}
            required
            style={{ visibility: isNotified && 'hidden' }}
          />
          <label
            className={styles.buttonLabel}
            htmlFor="checkbox"
            onClick={event => onNotifyMe(event)}
            style={{ visibility: isNotified && 'hidden' }}>
            <button className={styles.button} type="button">
              {language[translation.selected]['send']}
            </button>
          </label>
          <label
            className={styles.label}
            data-title={
              !isNotified ? language[translation.selected]['notifyMe'] : language[translation.selected]['thanks']
            }
            htmlFor="checkbox"
            onClick={() => onFocusInput()}
            style={{ pointerEvents: isNotified ? 'none' : 'all' }}
          />
        </form>
      </div>
    </>
  );
};
