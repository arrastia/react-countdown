import React, { forwardRef, useEffect } from 'react';

import styles from './GrowlMessage.module.scss';

import { icons } from 'config/icons';

import { GrowlMessageUtils } from './.tools/Utils/GrowlMessageUtils';

export const GrowlMessage = forwardRef(({ message, onClickEvent, onCloseEvent }, ref) => {
  const resources = { ...icons };
  let timeout;

  useEffect(() => {
    if (!message.sticky) {
      timeout = setTimeout(() => {
        onClose();
      }, message.life || 700);
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  const onClick = event => {
    if (
      onClickEvent &&
      !(
        GrowlMessageUtils.hasClass(event.target, styles.closeButton) ||
        GrowlMessageUtils.hasClass(event.target, styles.closeIcon)
      )
    ) {
      onClickEvent(message);
    }
  };

  const onClose = () => {
    if (timeout) clearTimeout(timeout);
    if (onCloseEvent) onCloseEvent(message);
  };

  const onRenderCloseIcon = () => {
    if (message.closable) {
      return (
        <button type="button" className={`${styles.closeButton} ${styles.link}`} onClick={() => onClose()}>
          <span className={`${styles.closeIcon} ${resources.icons['cross']}`}></span>
        </button>
      );
    } else null;
  };

  return (
    <div
      aria-live="polite"
      className={`${styles.itemWrap} p-highlight ${styles[message.severity]}`}
      onClick={() => onClick()}
      ref={ref}>
      <div aria-atomic="true" aria-live="assertive" className={styles.itemInner} role="alert">
        {onRenderCloseIcon()}
        <span className={`${styles.image} ${resources.icons[message.severity]}`}></span>
        <div className={styles.message}>
          <span className={styles.title}>{message.severity.toUpperCase()}</span>
          {message.detail && <div className={styles.details}>{message.detail}</div>}
        </div>
      </div>
    </div>
  );
});
