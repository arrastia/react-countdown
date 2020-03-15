import React, { useContext, useReducer } from 'react';

import { notifications } from 'config/notifications';

import { LanguageContext } from '../Contexts/LanguageContext';
import { NotificationContext } from '../Contexts/NotificationContext';
import { TranslationsContext } from '../Contexts/TranslationsContext';

import { notificationReducer } from '../Reducers/notificationReducer';

import { TextUtils } from 'tools/Utils/TextUtils';

export class Notification {
  constructor({ downloadLink, fixed, id, key, lifeTime, message, read, redirectionUrl, type } = {}) {
    this.downloadLink = downloadLink;
    this.fixed = fixed;
    this.id = id;
    this.key = key;
    this.lifeTime = lifeTime;
    this.message = message;
    this.read = read;
    this.redirectionUrl = redirectionUrl;
    this.type = type;
  }
}

export const NotificationProvider = ({ children }) => {
  const language = useContext(LanguageContext);
  const translation = useContext(TranslationsContext);

  const [notificationState, notificationDispatch] = useReducer(notificationReducer, { toShow: [], all: [] });

  const parseText = (rawText = '', param = {}) => {
    let text = rawText;
    Object.keys(param).forEach(key => {
      if (param[key]) {
        text = text.replace(`{:${key}}`, param[key]);
      } else {
        text = text.replace(`{:${key}}`, '');
      }
    });
    return text;
  };

  const onParse = ({ type, content = {}, message, config }) => {
    const notificationDTO = {};
    config.forEach(notificationGeneralTypeConfig => {
      const notificationTypeConfig = notificationGeneralTypeConfig.types.find(configType => configType.key === type);
      if (notificationTypeConfig) {
        const { key, fixed, lifeTime } = notificationGeneralTypeConfig;
        const { fixed: typeFixed, lifeTime: typeLifeTime } = notificationTypeConfig;
        notificationDTO.message = message;
        notificationDTO.type = key;
        notificationDTO.fixed = !typeFixed ? typeFixed : fixed;
        notificationDTO.lifeTime = typeLifeTime || lifeTime;
        notificationDTO.key = type;
        notificationDTO.message = parseText(notificationDTO.message, content);
      }
    });
    return new Notification(notificationDTO);
  };

  return (
    <NotificationContext.Provider
      value={{
        ...notificationState,
        add: notificationDTO => {
          const { type, content } = notificationDTO;
          const notification = onParse({
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
