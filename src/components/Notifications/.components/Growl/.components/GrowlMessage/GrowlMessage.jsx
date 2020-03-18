import React, { forwardRef, Fragment, useEffect } from 'react';

import { GrowlMessageUtils } from './.tools/Utils/GrowlMessageUtils';

export const GrowlMessage = forwardRef(({ message, onClickEvent, onCloseEvent }, ref) => {
  let className =
    ('p-growl-item-container p-highlight',
    {
      'p-growl-message-error': message.severity === 'error',
      'p-growl-message-info': message.severity === 'info',
      'p-growl-message-success': message.severity === 'success',
      'p-growl-message-warn': message.severity === 'warn'
    });
  let iconClassName =
    ('p-growl-image pi',
    {
      'pi-check': message.severity === 'success',
      'pi-exclamation-triangle': message.severity === 'warn',
      'pi-info-circle': message.severity === 'info',
      'pi-times': message.severity === 'error'
    });
  let timeout;

  useEffect(() => {
    if (!message.sticky) {
      timeout = setTimeout(() => {
        onClose(null);
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
    if (message.closable !== false) {
      return (
        <button type="button" className="p-growl-icon-close p-link" onClick={() => onClose()}>
          <span className="p-growl-icon-close-icon pi pi-times"></span>
        </button>
      );
    } else {
      return <Fragment></Fragment>;
    }
  };

  return (
    <div ref={ref} className={className} aria-live="polite" onClick={() => onClick()}>
      <div className="p-growl-item" role="alert" aria-live="assertive" aria-atomic="true">
        {onRenderCloseIcon()}
        <span className={iconClassName}></span>
        <div className="p-growl-message">
          <span className="p-growl-title">{message.summary}</span>
          {message.detail && <div className="p-growl-details">{message.detail}</div>}
        </div>
      </div>
    </div>
  );
});
