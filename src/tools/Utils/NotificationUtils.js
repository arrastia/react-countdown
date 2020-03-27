import { Notification } from '../Entity/Notification';

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

export const NotificationUtils = { onParse };
