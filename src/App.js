import React, { useEffect } from 'react';
import './App.css';

import iconsResources from 'config/icons.json';

import { Countdown } from '_components/Countdown';
import { Layout } from '_components/Layout';
import { NotifyMe } from '_components/NotifyMe/NotifyMe';
import { SocialMedia } from '_components/SocialMedia/SocialMedia';
import { Title } from '_components/Title';

import { ResourcesContext } from 'interfaces/views/.tools/context/ResourcesContext';

import { useJQuery } from 'interfaces/views/.tools/_hooks/useJQuery';

function App() {
  const $ = useJQuery();

  const resources = { ...iconsResources };

  useEffect(() => {
    if ($) {
    }
  }, [$]);

  const layout = children => {
    return <Layout>{children}</Layout>;
  };

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
}

export default App;
