import React from 'react';
import { Download } from './components/Download/Download';
import { Faq } from './components/faq/Faq';
import { Features } from './components/Features/Features';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { NewsLetter } from './components/newsLetter/NewsLetter';

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Download />
      <Faq />
      <NewsLetter />
      <Footer />
    </>
  );
};
