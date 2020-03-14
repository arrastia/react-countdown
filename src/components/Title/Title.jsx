import React from 'react';

import styles from './Title.module.scss';

export const Title = () => (
  <div className={styles.wrap}>
    <h1 className={styles.title}>pablo arrastia</h1>
    <div className={styles.subtitleWrap} data-hover="See you soon!">
      <h2 className={styles.subtitle}>Working on the new website</h2>
    </div>
  </div>
);
