import React, { useContext } from 'react';

import styles from './Footer.module.scss';

import { LanguageContext } from 'tools/Contexts/LanguageContext';
import { TranslationsContext } from 'tools/Contexts/TranslationsContext';

export const Footer = () => {
  const language = useContext(LanguageContext);
  const translation = useContext(TranslationsContext);

  return (
    <footer className={styles.footer}>
      {language[translation.selected]['footer']}
      <a className={styles.link} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        {language[translation.selected]['react']}
      </a>
    </footer>
  );
};
