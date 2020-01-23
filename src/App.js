import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import iconsResources from 'config/icons.json';

import { useJQuery } from 'interfaces/views/.tools/_hooks/useJQuery';

import { Countdown } from '_components/Countdown';
import { NotifyMe } from '_components/NotifyMe/NotifyMe';
import { SocialMedia } from '_components/SocialMedia/SocialMedia';

import { ResourcesContext } from 'interfaces/views/.tools/context/ResourcesContext';

function App() {
  const [resources] = useState({ ...iconsResources });

  const $ = useJQuery();

  useEffect(() => {
    if ($) {
    }
  }, [$]);

  return (
    <ResourcesContext.Provider value={resources}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">pablo arrastia</h1>
          <div className="subtitle-wrap" data-hover="See you soon!">
            <h2 className="subtitle">Working on the new website</h2>
          </div>
        </header>
        <section className="App-countdown">
          <Countdown />
        </section>
        <section className="App-notifyme">
          <NotifyMe />
        </section>
        <section className="App-socialmedia">
          <SocialMedia />
        </section>
        <footer className="App-footer">
          Learn more about{' '}
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            react.
          </a>
        </footer>
      </div>
    </ResourcesContext.Provider>
  );
}

export default App;
