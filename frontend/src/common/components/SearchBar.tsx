import React, {useState} from 'react';
import styled from 'styled-components';
import {gray, red} from '../../theme/ColorConstants';

const StyledInputWrapper = styled.div`
  width: 40%;
  height: 40px;
  min-width: 200px;
  border-radius: 24px;
  border: 1px solid ${gray.normal};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border 200ms linear;
  ${({isFocused}) => isFocused && `border: 1px solid ${red.dark};`}

  &:hover {
    ${({isFocused}) => !isFocused && `border: 1px solid ${red.light};`}
    transition: border 200ms linear;
  }
`;

const StyledInput = styled.input`
  width: 95%;
  height: 95%;
  border: none;
  padding: 0;
  outline: none;
`;

interface Props {
  searchType: string;
}

export const SearchBar = ({searchType}): Props => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <StyledInputWrapper isFocused={isFocused}>
      <StyledInput
        placeholder={`Search for ${searchType}...`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </StyledInputWrapper>
  );
};
