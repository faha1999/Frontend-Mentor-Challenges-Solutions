import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Error } from '../Error';

export const FilteredCountries = (props) => {
  return (
    <section className="container">
      {props.foundFilter ? (
        props.filtered?.map(
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
                <div>
                  <div className="imageContainer">
                    <img className="image" src={flags.png} alt="flag" />
                  </div>
                  <section className="infoSection">
                    <h2 className="countryName">{name}</h2>
                    <p>
                      <span className="category">Population:</span>{' '}
                      {population.toLocaleString()}
                    </p>
                    <p>
                      <span className="category">Region:</span> {region}
                    </p>
                    <p>
                      <span className="category">Capital:</span> {capital}
                    </p>
                  </section>
                </div>
              </motion.div>
            </Link>
          ),
        )
      ) : (
        <Error />
      )}
    </section>
  );
};
