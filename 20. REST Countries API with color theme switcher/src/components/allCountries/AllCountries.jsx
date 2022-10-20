import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const AllCountries = (props) => {
  return (
    <div className="container">
      {props.countries.map(
        ({ name, population, region, capital, flags, index }) => (
          <Link
            key={name}
            to={`/${name.toLowerCase().replace(/\s/g, '%20')}`}
            className="insideContainer"
          >
            <motion.div
              initial={{
                opacity: 0,
                translateX: -500,
                rotate: 10,
              }}
              animate={{
                opacity: 1,
                translateX: 0,
                rotate: 0,
              }}
              transition={{
                delay: index * 0.02,
              }}
            >
              <div className="imageContainer">
                <img
                  className="image"
                  src={flags ? flags.svg : flags.png}
                  alt={name}
                />
              </div>
              <section className="infoSection">
                <h2 className="countryName"> {name}</h2>
                <div>
                  <p>
                    <span className="category">Population:</span>
                    {population.toLocaleString()}
                  </p>
                  <p>
                    <span className="category">Region:</span> {region}
                  </p>
                  <p>
                    <span className="category">Capital:</span> {capital}
                  </p>
                </div>
              </section>
            </motion.div>
          </Link>
        ),
      )}
    </div>
  );
};
