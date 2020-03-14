import React from 'react';

import styles from './App.module.scss';

import { Countdown } from 'components/Countdown';
import { Layout } from 'components/Layout';
import { NotifyMe } from 'components/NotifyMe/NotifyMe';
import { SocialMedia } from 'components/SocialMedia';
import { Title } from 'components/Title';

import { LanguageProvider } from 'tools/Providers/LanguageProvider';
import { TranslationsProvider } from 'tools/Providers/TranslationsProvider';

export const App = () => {
  const layout = children => (
    <LanguageProvider>
      <TranslationsProvider>
        <Layout>{children}</Layout>
      </TranslationsProvider>
    </LanguageProvider>
  );

  return layout(
    <main className={styles.main}>
      <Title />
      <Countdown />
      <NotifyMe />
      <SocialMedia />
    </main>
  );
};
