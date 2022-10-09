import React, { useContext } from 'react';
import RemoveIcon from '../../assets/images/icon-remove.svg';
import { Context } from '../../Context';
import styled from 'styled-components';

const RemoveButton = styled.button`
  &:hover {
    background: ${({ theme }) => theme.pillBgDark};
    border-color: ${({ theme }) => theme.pillBgDark};
  }
`;

export const FilterPill = ({ filter }) => {
  const { removeFilter } = useContext(Context);

  return (
    <div className="FilterPillWrapper">
      <span className="Pill">{filter.text}</span>

      <RemoveButton
        className="RemoveButton"
        onClick={() => removeFilter(filter)}
      >
        <img src={RemoveIcon} alt="remove filter" />
      </RemoveButton>
    </div>
  );
};
