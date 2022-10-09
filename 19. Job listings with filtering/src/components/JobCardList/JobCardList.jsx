import React, { useContext } from 'react';
import { Context } from '../../Context';
import styled from 'styled-components';
import { FilterBox } from '../FilterBox/FilterBox';
import { JobCard } from '../jobcard/JobCard';

const Section = styled.section`
  background: ${({ theme }) => theme.body};
`;

export const JobCardList = () => {
  const { allJobs } = useContext(Context);
  return (
    <Section className="Section">
      <div className="Container">
        <FilterBox />
        {allJobs.map((job) => job.show && <JobCard key={job.id} job={job} />)}
      </div>
    </Section>
  );
};
