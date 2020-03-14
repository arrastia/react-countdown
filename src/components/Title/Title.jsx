import React, { useContext } from 'react';

import styles from './Title.module.scss';

import { LanguageContext } from 'tools/Contexts/LanguageContext';
import { TranslationsContext } from 'tools/Contexts/TranslationsContext';

export const Title = () => {
  const language = useContext(LanguageContext);
  const translation = useContext(TranslationsContext);

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>{language[translation.selected]['title']}</h1>
      <div className={styles.subtitleWrap} data-hover={language[translation.selected]['subtitleHidden']}>
        <h2 className={styles.subtitle}>{language[translation.selected]['subtitle']}</h2>
      </div>
    </div>
  );
};
