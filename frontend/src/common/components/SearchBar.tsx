import React, {useState} from 'react';
import styled from 'styled-components';
import {getRequest} from '../../apiUtils/api';
import {gray, red} from '../../theme/ColorConstants';
import {RoundButton} from './Button';

const SearchBarWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const StyledInputWrapper = styled.div`
  width: 40%;
  height: 40px;
  min-width: 350px;
  border-radius: 24px;
  border: 1px solid ${gray.normal};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border 200ms linear;
  margin: 0 16px;
  ${({isFocused}) => isFocused && `border: 1px solid ${red.dark};`}

  &:hover {
    ${({isFocused}) => !isFocused && `border: 1px solid ${red.light};`}
    transition: border 200ms linear;
  }
`;

const StyledInput = styled.input`
  width: 90%;
  height: 90%;
  border: none;
  padding: 0;
  outline: none;
  font-size: 18px;
`;

const onClick = (searchValue: string) => {
  // getRequest('http://localhost:8090/games');
  console.log(searchValue);
};

interface Props {
  searchType: string;
}

export const SearchBar = ({searchType}): Props => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <SearchBarWrapper>
      <StyledInputWrapper isFocused={isFocused}>
        <StyledInput
          placeholder={`Search for ${searchType}...`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </StyledInputWrapper>
      <RoundButton onClick={() => onClick(searchValue)} />
    </SearchBarWrapper>
  );
};
