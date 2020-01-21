import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import { useJQuery } from "./_hooks/useJQuery";

import { Countdown } from "./_components/Countdown";
import { NotifyMe } from "./_components/NotifyMe/NotifyMe";

function App() {
  const $ = useJQuery();

  useEffect(() => {
    if ($) {
    }
  }, [$]);

  return (
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
      <footer className="App-footer">
        Learn more about{" "}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          react.
        </a>
      </footer>
    </div>
  );
}

export default App;
