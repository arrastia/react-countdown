import React from 'react';

import styles from './SocialMedia.module.scss';

import { icons } from 'config/icons';
import SocialMediaConfig from './.config/SocialMedia.config.json';

export const SocialMedia = () => {
  const resources = { ...icons };

  return (
    <div className={styles.wrap}>
      {SocialMediaConfig.networks.map((item, index) => (
        <a
          className={`${styles.btn} ${styles[item.name]}`}
          href={item.url}
          key={index}
          rel="noopener noreferrer"
          target="_blank"
          title={item.name}>
          <i className={resources.icons[item.name]}></i>
        </a>
      ))}
    </div>
  );
};
