import React from 'react';
import styled from 'styled-components';
import {red} from '../../theme/ColorConstants';

const StyledRoundButton = styled.input`
  background-color: ${red.light};
  border: none;
  border-radius: 24px;
  width: 42px;
  transition: background-color 200ms linear;

  &:hover {
    transition: background-color 200ms linear;
    background-color: ${red.normal};
  }

  &:active {
    box-shadow: 0 0 8px rgb(0 0 0 / 0.75);
  }
`;

interface RoundButtonProps {
  onClick: () => void;
}

export const RoundButton = ({onClick}): RoundButtonProps => {
  return (
    <StyledRoundButton
      onClick={onClick}
      type="button"
      value="Go!"
    ></StyledRoundButton>
  );
};
