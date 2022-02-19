import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";
import { NavBar } from "./common/components/NavBar";
import { GamesPage } from "./Games/containers/GamesPage";
import { MoviesPage } from "./Movies/containers/MoviesPage";
import { MusicPage } from "./Music/containers/MusicPage";

const StyledApp = styled.div`
  width: 100%;
  height: 100%;
`;

export const App = () => {
  return (
    <StyledApp className="App">
      <NavBar />
      <div className="main">
        <Routes>
          <Route path="games" element={<Games />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="music" element={<Music />}></Route>
          <Route path="*" element={<Navigate to="games" replace />} />
        </Routes>
      </div>
    </StyledApp>
  );
};

export const Games = () => {
  return <GamesPage />;
};
export const Movies = () => {
  return <MoviesPage />;
};
export const Music = () => {
  return <MusicPage />;
};
