import React, { useContext, useReducer } from 'react';

import { notifications } from 'config/notifications';

import { LanguageContext } from '../Contexts/LanguageContext';
import { NotificationContext } from '../Contexts/NotificationContext';
import { TranslationsContext } from '../Contexts/TranslationsContext';

import { notificationReducer } from '../Reducers/notificationReducer';

import { NotificationUtils } from 'tools/Utils/NotificationUtils';
import { TextUtils } from 'tools/Utils/TextUtils';

export const NotificationProvider = ({ children }) => {
  const language = useContext(LanguageContext);
  const translation = useContext(TranslationsContext);

  const [notificationState, notificationDispatch] = useReducer(notificationReducer, { toShow: [], all: [] });

  return (
    <NotificationContext.Provider
      value={{
        ...notificationState,
        add: notificationDTO => {
          const { type, content } = notificationDTO;
          const notification = NotificationUtils.onParse({
            type,
            content,
            message: language[translation.selected][TextUtils.camelCase(type)],
            config: notifications.notificationSchema
          });
          notificationDispatch({
            type: 'ADD',
            payload: notification
          });
        },
        read: notificationId => {
          notificationDispatch({
            type: 'READ',
            payload: {
              notificationId
            }
          });
        },
        removeById: notificationId => {
          notificationDispatch({
            type: 'REMOVE',
            payload: {
              notificationId
            }
          });
        },
        clearToShow: () => {
          notificationDispatch({
            type: 'CLEAR_TO_SHOW',
            payload: {}
          });
        },
        deleteAll: () => {
          notificationDispatch({
            type: 'DESTROY'
          });
        }
      }}>
      {children}
    </NotificationContext.Provider>
  );
};
