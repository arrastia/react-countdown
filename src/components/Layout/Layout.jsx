import React from 'react';

import styles from './Layout.module.scss';

import { Footer } from './.components/Footer';
import { Header } from './.components/Header';

export const Layout = ({ children }) => (
  <div className={styles.app}>
    <Header />
    {children}
    <Footer />
  </div>
);
