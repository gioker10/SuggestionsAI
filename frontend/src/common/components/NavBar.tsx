import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavBar = styled.nav`
  display: flex;
  width: 100%;
  background-color: red;
  height: 60px;
`;

const StyledLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const NavBar = () => {
  return (
    <StyledNavBar>
      <StyledLinkContainer>
        <StyledLink to="/games">Games</StyledLink>
      </StyledLinkContainer>
      <StyledLinkContainer>
        <StyledLink to="/movies">Movies</StyledLink>
      </StyledLinkContainer>
      <StyledLinkContainer>
        <StyledLink to="/music">Music</StyledLink>
      </StyledLinkContainer>
    </StyledNavBar>
  );
};
