import React from 'react';

import './App.css';

import iconsResources from 'config/icons.json';

import { Countdown } from 'components/Countdown';
import { Layout } from 'components/Layout';
import { NotifyMe } from 'components/NotifyMe/NotifyMe';
import { SocialMedia } from 'components/SocialMedia/SocialMedia';
import { Title } from 'components/Title';

import { ResourcesContext } from 'tools/context/ResourcesContext';

export const App = () => {
  const resources = { ...iconsResources };

  const layout = children => <Layout>{children}</Layout>;

  return layout(
    <ResourcesContext.Provider value={resources}>
      <main className="App-main">
        <Title />
        <Countdown />
        <NotifyMe />
        <SocialMedia />
      </main>
    </ResourcesContext.Provider>
  );
};
