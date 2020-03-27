import React, { Fragment, useContext, useRef, useState } from 'react';

import emailjs from 'emailjs-com';

import styles from './NotifyMe.module.scss';

import { icons } from 'config/icons';

import { useLocalStorage } from 'tools/Hooks/useLocalStorage';
import { useOnClickOutside } from 'tools/Hooks/useOnClickOutside';

import { LanguageContext } from 'tools/Contexts/LanguageContext';
import { NotificationContext } from 'tools/Contexts/NotificationContext';
import { TranslationsContext } from 'tools/Contexts/TranslationsContext';

export const NotifyMe = () => {
  const resources = { ...icons };

  const language = useContext(LanguageContext);
  const notification = useContext(NotificationContext);
  const translation = useContext(TranslationsContext);

  const [email, setEmail] = useState();
  const [isSending, setIsSending] = useState(false);

  const checkboxRef = useRef(null);
  const formRef = useRef(null);
  const inputRef = useRef(null);

  const [isNotified, setIsNotified] = useLocalStorage('is-notified', false);
  useOnClickOutside(formRef, () => onCloseNotifyMe());

  const onCloseNotifyMe = () => (checkboxRef.current.checked = false);

  const onFocusInput = () => inputRef.current.focus();

  const onNotifyMe = event => {
    if (inputRef.current.checkValidity()) {
      setIsSending(true);
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
        .send('gmail', 'template_yg7YSVyl', templateParams, 'user_XU4Y38mEGpTRJE2F2U9V1')
        .then(
          response => {
            if (response.status >= 200 && response.status <= 299) {
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
        .finally(() => {
          onCloseNotifyMe();
          setIsSending(false);
        });
    }
  };

  return (
    <Fragment>
      <input id="checkbox" className={styles.checkbox} ref={checkboxRef} type="checkbox" />
      <div className={styles.formContainer}>
        <form
          action=""
          className={styles.form}
          onKeyDown={event => event.key === 'Enter' && onNotifyMe(event)}
          ref={formRef}>
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
            onClick={event => !isSending && onNotifyMe(event)}
            style={{ visibility: isNotified && 'hidden' }}>
            <button className={styles.button} type="button">
              {!isSending ? (
                language[translation.selected]['send']
              ) : (
                <i className={`${resources.icons['spinner']} ${styles.spinner}`}></i>
              )}
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
    </Fragment>
  );
};
