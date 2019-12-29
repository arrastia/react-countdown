import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import { useJQuery } from "./_hooks/useJQuery";

import { Countdown } from "./_components/Countdown";

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
      <footer className="App-footer">
        This project is build with react.{" "}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </footer>
    </div>
  );
}

export default App;
