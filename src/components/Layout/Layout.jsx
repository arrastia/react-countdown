import React from 'react';

import styles from './Layout.module.scss';

import { Footer } from './.components/Footer';
import { Header } from './.components/Header';

export const Layout = ({ children }) => {
  return (
    <div className={styles.App}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
