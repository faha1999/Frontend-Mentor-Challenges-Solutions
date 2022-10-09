import React, { createContext, useEffect, useState } from 'react';
import jobsData from './data/jobsData';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [allJobs, setAllJobs] = useState(
    jobsData.map((job) => ({ ...job, show: true })),
  );
  const [filters, setFilters] = useState([]);

  const removeFilter = (filterObj) => {
    const updatedFilters = filters.filter(
      (filter) => filter.id !== filterObj.id,
    );
    setFilters(updatedFilters);
  };

  const addFilter = (text) => {
    const isAlreadySelected = filters.some((filter) => filter.text === text);
    if (!isAlreadySelected) {
      const newFilter = {
        id: new Date().getTime(),
        text,
      };
      setFilters((prevFilters) => [...prevFilters, newFilter]);
    }
    return false;
  };

  const clearAllFilters = () => {
    setFilters([]);
  };

  useEffect(() => {
    const filterTexts = filters.map((filter) => filter.text);
    const updatedJobs = allJobs.map((job) => {
      const textsToCompare = [
        job.role,
        job.level,
        ...job.languages,
        ...job.tools,
        job.new && 'New',
        job.featured && 'Featured',
      ];

      if (
        filterTexts.every((filterText) => textsToCompare.includes(filterText))
      ) {
        return { ...job, show: true };
      } else {
        return { ...job, show: false };
      }
    });
    setAllJobs(updatedJobs);
  }, [filters]);

  return (
    <Context.Provider
      value={{
        allJobs,
        setAllJobs,
        filters,
        setFilters,
        removeFilter,
        addFilter,
        clearAllFilters,
      }}
    >
      {children}
    </Context.Provider>
  );
};
