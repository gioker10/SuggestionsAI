import React, { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import { NavBar } from "./common/components/NavBar";
import { Pages } from "./common/constants/Constants";
import { GamesPage } from "./Games/containers/GamesPage";
import { MoviesPage } from "./Movies/containers/MoviesPage";
import { MusicPage } from "./Music/containers/MusicPage";

const StyledApp = styled.div`
  width: 100%;
  height: 100%;
  font-family: Charlie Text, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans,
    Ubuntu, Droid Sans, Helvetica Neue, sans-serif;
`;

export const App = () => {
  return (
    <StyledApp>
      <NavBar />
      <Fragment>
        <Routes>
          <Route path={Pages.games} element={<Games />}></Route>
          <Route path={Pages.movies} element={<Movies />}></Route>
          <Route path={Pages.music} element={<Music />}></Route>
          <Route path="*" element={<Navigate to={Pages.games} replace />} />
        </Routes>
      </Fragment>
    </StyledApp>
  );
};

export const Games = () => {
  return <GamesPage title={Pages.games} />;
};
export const Movies = () => {
  return <MoviesPage title={Pages.movies} />;
};
export const Music = () => {
  return <MusicPage title={Pages.music} />;
};
