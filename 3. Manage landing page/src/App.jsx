import React from 'react';
import { Header } from './components/Header';
import bgTop from './assets/images/bg-tablet-pattern.svg';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <>
      <img src={bgTop} alt="" className="bgTop" />
      <Header />
      <Hero />
      <About />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
};
