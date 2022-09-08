import React from 'react';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { Productive } from './components/Productive';
import { Testimonials } from './components/Testimonials';

export const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <Features />
      <Productive />
      <Testimonials />
      <Footer />
    </>
  );
};
