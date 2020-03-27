import React, { forwardRef, Fragment, useEffect } from 'react';

import './GrowlMessage.css';

import { icons } from 'config/icons';

import { GrowlMessageUtils } from './.tools/Utils/GrowlMessageUtils';

export const GrowlMessage = forwardRef(({ message, onClickEvent, onCloseEvent }, ref) => {
  const resources = { ...icons };
  let timeout;

  useEffect(() => {
    if (!message.sticky) {
      timeout = setTimeout(() => {
        onClose();
      }, message.life || 3000);
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
        GrowlMessageUtils.hasClass(event.target, 'p-growl-icon-close') ||
        GrowlMessageUtils.hasClass(event.target, 'p-growl-icon-close-icon')
      )
    ) {
      onClickEvent(message);
    }
  };

  const onClose = () => {
    if (timeout) {
      clearTimeout(timeout);
    }

    if (onCloseEvent) {
      onCloseEvent(message);
    }
  };

  const onRenderCloseIcon = () => {
    if (message.closable) {
      return (
        <button type="button" className="p-growl-icon-close p-link" onClick={() => onClose()}>
          <span className={`p-growl-icon-close-icon ${resources.icons['cross']}`}></span>
        </button>
      );
    } else null;
  };

  return (
    <div
      aria-live="polite"
      className={`p-growl-item-container p-highlight p-growl-message-${message.severity}`}
      onClick={() => onClick()}
      ref={ref}>
      <div aria-atomic="true" aria-live="assertive" className="p-growl-item" role="alert">
        {onRenderCloseIcon()}
        <span className={`p-growl-image ${resources.icons[message.severity]}`}></span>
        <div className="p-growl-message">
          <span className="p-growl-title">{message.severity.toUpperCase()}</span>
          {message.detail && <div className="p-growl-details">{message.detail}</div>}
        </div>
      </div>
    </div>
  );
});
