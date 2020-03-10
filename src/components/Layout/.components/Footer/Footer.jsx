import React from 'react';

import styles from './Footer.module.scss';

export const Footer = () => (
  <footer className={styles.footer}>
    Learn more about{'    '}
    <a className={styles.link} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
      react.
    </a>
  </footer>
);
