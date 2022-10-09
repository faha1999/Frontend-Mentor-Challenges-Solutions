import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../Context';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.cardBg};
  box-shadow: ${({ theme }) =>
    theme === 'light' ? 'var(--box-shadow)' : 'none'};
  border-left: ${({ featured }) =>
    featured ? '0.35em solid var(--desaturated-dark-cyan)' : null};
`;

const JobTitle = styled.h2`
  color: ${({ theme }) => theme.text};
`;

const Skill = styled.button`
  color: ${({ theme }) => theme.pillText};
  background: ${({ theme }) => theme.pillBg};

  :hover {
    background: ${({ theme }) => theme.pillBgDark};
  }
`;
export const JobCard = ({ job }) => {
  const { filters, addFilter } = useContext(Context);
  const skills = [job.role, job.level, ...job.languages, ...job.tools];

  return (
    <Wrapper className="Wrapper" key={job.id} featured={job.featured}>
      <div className="Column">
        <img
          className="CompanyLogo"
          src={job.logo}
          alt={`${job.company} Logo`}
        />

        <div className="CompanyInfoWrapper">
          <h1 className="CompanyName">{job.company}</h1>
          {job.new && (
            <span className="NewJob Job" onClick={() => addFilter('New')}>
              New!
            </span>
          )}
          {job.featured && (
            <span
              className="FeaturedJob Job"
              onClick={() => addFilter('Featured')}
            >
              Featured
            </span>
          )}
          <JobTitle className="JobTitle">{job.position}</JobTitle>

          <div className="MetaInfoWrapper">
            <span className="MetaInfo">{job.postedAt}</span>
            <div className="MetaInfoDot"></div>
            <span className="MetaInfo">{job.contract}</span>
            <div className="MetaInfoDot"></div>
            <span className="MetaInfo">{job.location}</span>
          </div>
        </div>
      </div>

      <div className="Column">
        {skills.map((skill, index) => (
          <Skill
            className="Skill"
            key={index}
            isAlreadySelected={filters.some(
              (filter) => filter.text === skills[index],
            )}
            onClick={() => {
              addFilter(skills[index]);
            }}
          >
            {skill}
          </Skill>
        ))}
      </div>
    </Wrapper>
  );
};
