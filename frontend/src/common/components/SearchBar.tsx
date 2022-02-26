import React, {useState} from 'react';
import styled from 'styled-components';
import {getRequest} from '../../apiUtils/api';
import {gray, red} from '../../theme/ColorConstants';
import {RoundButton} from './Button';

const SearchBarWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const StyledInputWrapper = styled.div`
  width: 40%;
  height: ${({hasSearchValue}) => (hasSearchValue ? '320px' : '40px')};
  min-width: 350px;
  border-radius: 24px;
  border: 1px solid ${gray.normal};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  transition: border 200ms linear;
  margin: 0 16px;
  overflow: hidden;
  flex-direction: column;
  ${({isFocused}) => isFocused && `border: 1px solid ${red.dark};`}

  &:hover {
    ${({isFocused}) => !isFocused && `border: 1px solid ${red.light};`}
    transition: border 200ms linear;
  }
`;

const StyledInput = styled.input`
  width: 90%;
  ${({hasSearchValue}) =>
    !hasSearchValue
      ? 'height: 90%; border-bottom: 0px;'
      : `height: 40px; align-self: flex-start; border-bottom: 1px solid ${gray.normal};`}
  border-top: none;
  border-left: none;
  border-right: none;
  padding: 0;
  outline: none;
  font-size: 18px;
  align-self: center;
  padding-top: 2px;
`;

const StyledListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  width: 90%;
  align-self: center;
`;

const ListItem = styled.div`
  padding: 8px 0;

  &:hover {
    background-color: ${gray.light};
  }
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

  console.error(searchValue);

  return (
    <SearchBarWrapper>
      <StyledInputWrapper isFocused={isFocused} hasSearchValue={!!searchValue}>
        <StyledInput
          hasSearchValue={!!searchValue}
          placeholder={`Search for ${searchType}...`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {searchValue && (
          <StyledListWrapper>
            <ListItem>Elden Ring</ListItem>
            <ListItem>Death Stranding</ListItem>
            <ListItem>Red Dead Redemption 2</ListItem>
            <ListItem>Risk of Rain 2</ListItem>
          </StyledListWrapper>
        )}
      </StyledInputWrapper>
      <RoundButton onClick={() => onClick(searchValue)} />
    </SearchBarWrapper>
  );
};
