import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { routerLinks } from '../routerUtils/RouterConstants';
import { red } from './ColorConstants';

const StyledLogo = styled.svg`
  cursor: pointer;
`;

export const Logo = () => {
  const navigate = useNavigate();
  return (
    <StyledLogo
      viewBox="0 0 150 58"
      onClick={() => navigate(routerLinks[0].link)}
    >
      <text x="20" y="35" fill={red.normal}>
        SuggestionsAI
      </text>
    </StyledLogo>
  );
};
