import React, { useContext } from 'react';

import styles from './SocialMedia.module.scss';

import SocialMediaConfig from './.config/SocialMedia.config.json';

import { ResourcesContext } from 'tools/Context/ResourcesContext';

export const SocialMedia = () => {
  const resources = useContext(ResourcesContext);

  return (
    <div className={styles.wrap}>
      {SocialMediaConfig.networks.map(item => (
        <a
          className={`${styles.btn} ${styles[item.name]}`}
          href={item.url}
          rel="noopener noreferrer"
          target="_blank"
          title={item.name}>
          <i className={resources.icons[item.name]}></i>
        </a>
      ))}
    </div>
  );
};
