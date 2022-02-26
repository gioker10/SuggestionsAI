import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { routerLinks, RouterLink } from "../../routerUtils/RouterConstants";
import { red } from "../../theme/ColorConstants";
import { Logo } from "../../theme/Logo";

const StyledNavBar = styled.nav`
  display: flex;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #d3d3d3;
`;

const StyledLink = styled(Link)`
  display: flex;
  min-width: 80px;
  justify-content: center;
  align-items: center;
  transition: border-bottom 200ms linear;
  text-decoration: none;
  color: black;
  ${({ activetabindex, tabIndex }) =>
    activetabindex === tabIndex &&
    `padding-top: 5px;border-bottom: 5px solid ${red.dark}`};

  &:hover {
    cursor: pointer;
    ${({ activetabindex, tabIndex }) =>
      activetabindex !== tabIndex && `border-bottom: 5px solid ${red.light}`};
    transition: border-bottom 200ms linear;
    padding-top: 5px;
  }
`;

export const NavBar = () => {
  const [activeTabIndex, setActiveTabIndex]: [number, (number) => number] =
    useState(routerLinks[0].tabIndex);

  useEffect(() => {
    const currentPathIndex = routerLinks.find(
      (item) => item.link === window.location.pathname
    )?.tabIndex;
    setActiveTabIndex(currentPathIndex || routerLinks[0].tabIndex);
  }, []);

  return (
    <StyledNavBar>
      <Logo />
      {routerLinks.map((item: RouterLink) => (
        <StyledLink
          key={item.link}
          onClick={() => setActiveTabIndex(item.tabIndex)}
          tabIndex={item.tabIndex}
          activetabindex={activeTabIndex}
          to={item.link}
        >
          {item.title}
        </StyledLink>
      ))}
    </StyledNavBar>
  );
};
