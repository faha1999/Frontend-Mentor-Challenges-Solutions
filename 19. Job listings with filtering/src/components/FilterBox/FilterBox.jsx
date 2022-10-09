import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import { pureDropdownTexts } from '../../helpers/helpers';
import { Context } from '../../Context';
import { FilterDropdown } from '../FilterDropdown/FilterDropdown';
import { FilterPill } from '../FilterPill/FilterPill';

const FilterBoxWrapper = styled.div`
  background: ${({ theme }) => theme.cardBg};
`;

const FilterInput = styled.input`
  background: ${({ theme }) => theme.cardBg};
`;

export const FilterBox = () => {
  const [value, setValue] = useState('');
  const [dropdownTexts, setDropdownTexts] = useState([]);
  const inputRef = useRef(null);
  const { allJobs, filters, setFilters, clearAllFilters } = useContext(Context);
  const addValueToFilter = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        if (value.length > 0 && dropdownTexts.includes(value)) {
          setFilters((prevFilters) => [
            ...prevFilters,
            { id: new Date().getTime(), text: value },
          ]);
          setValue('');
          inputRef.current.blur();
        }
      }
    },
    [setFilters, dropdownTexts, value],
  );

  useEffect(() => {
    document.addEventListener('keyup', addValueToFilter);
    return () => document.removeEventListener('keyup', addValueToFilter);
  }, [addValueToFilter]);

  const dropdownTextsArr = allJobs.map((job) => {
    return [
      job.role,
      job.level,
      ...job.languages,
      ...job.tools,
      job.new && 'New',
      job.featured && 'Featured',
    ];
  });
  const dropdownTextsReduceArr = dropdownTextsArr.reduce(
    (accumulator, currentValue) => [...accumulator, ...currentValue],
  );
  const cleanDropdownTexts = pureDropdownTexts(dropdownTextsReduceArr).sort();

  useEffect(() => {
    const updatedDropdownTexts = cleanDropdownTexts.filter((text) =>
      text.toLowerCase().includes(value.toLowerCase()),
    );
    setDropdownTexts(updatedDropdownTexts);
  }, [value]);

  return (
    <FilterBoxWrapper
      className="FilterBoxWrapper"
      onClick={() => inputRef.current.focus()}
    >
      <div className="FilterPillsWrapper">
        {filters.map((filter) => (
          <FilterPill key={filter.id} filter={filter} />
        ))}
      </div>

      {value.length === 0 && filters.length === 0 && (
        <p className="Placeholder">Search your dream job...</p>
      )}

      <label>
        <FilterInput
          className="FilterInput"
          type="text"
          autoComplete="off"
          size={value.length ? value.length : 1}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          ref={inputRef}
        />
      </label>

      {value.length > 0 && (
        <FilterDropdown
          value={value}
          setValue={setValue}
          dropdownTexts={dropdownTexts}
        />
      )}

      <button
        className="ClearButton"
        onClick={() => {
          clearAllFilters();
          setValue('');
          inputRef.current.blur();
        }}
      >
        Clear
      </button>
    </FilterBoxWrapper>
  );
};
