import React from 'react';

import styles from './App.module.scss';

import { Countdown } from 'components/Countdown';
import { Layout } from 'components/Layout';
import { NotifyMe } from 'components/NotifyMe/NotifyMe';
import { SocialMedia } from 'components/SocialMedia';
import { Title } from 'components/Title';

import { ResourcesProvider } from 'tools/Providers/RecourcesProvider';

export const App = () => {
  const layout = children => <Layout>{children}</Layout>;

  return layout(
    <ResourcesProvider>
      <main className={styles.main}>
        <Title />
        <Countdown />
        <NotifyMe />
        <SocialMedia />
      </main>
    </ResourcesProvider>
  );
};
