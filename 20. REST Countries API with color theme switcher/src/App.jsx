import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Countries } from './components/allCountries/Countries';
import { CountryDetails } from './components/countryDetails/CountryDetails';
import { Header } from './components/header/Header';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/:name" element={<CountryDetails />} />
      </Routes>
    </>
  );
};
