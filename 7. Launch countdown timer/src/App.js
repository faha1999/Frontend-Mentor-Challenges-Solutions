import React from 'react';
import { CountDown } from './components/CountDown';
import { Footer } from './components/Footer';
import { SocialIcons } from './components/SocialIcons';

export const App = () => {
  return (
    <>
      <main>
        <h1>We're launching soon</h1>
        <CountDown />
        <SocialIcons />
        <div className="hills" />
        <Footer />
      </main>
    </>
  );
};
