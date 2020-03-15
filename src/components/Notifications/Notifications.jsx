import React, { useEffect, useContext, useRef } from 'react';

import { Growl } from './.components/Growl';

import { LanguageContext } from 'tools/Contexts/LanguageContext';
import { NotificationContext } from 'tools/Contexts/NotificationContext';
import { TranslationsContext } from 'tools/Contexts/TranslationsContext';

import { TextUtils } from 'tools/Utils/TextUtils';

export const Notifications = () => {
  const notificationContext = useContext(NotificationContext);
  const language = useContext(LanguageContext);
  const translation = useContext(TranslationsContext);

  let growlRef = useRef(null);

  useEffect(() => {
    notificationContext.toShow.map(notification => {
      const message = <div>{notification.message}</div>;
      growlRef.current.show({
        severity: notification.type,
        summary: language[translation.selected][`notification${TextUtils.capitalize(notification.type)}Title`],
        detail: message,
        life: notification.lifeTime,
        sticky: notification.fixed
      });
    });
    if (notificationContext.toShow.length > 0) {
      notificationContext.clearToShow();
    }
  }, [notificationContext.toShow]);

  return <Growl ref={growlRef} />;
};
