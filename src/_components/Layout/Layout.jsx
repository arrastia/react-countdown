import React from 'react';

import './Layout.css';

import { Footer } from './.components/Footer';
import { Header } from './.components/Header';

export const Layout = ({ children }) => {
  return (
    <div className="App">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
