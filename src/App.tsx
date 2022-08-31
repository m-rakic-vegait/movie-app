import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Header from './components/Header/Header';
import MovieDetailsPage from './pages/MovieDetailsPage';
import MoviesPage from './pages/MoviesPage';
import theme from './theme';
import paths from './utils/paths';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
            <Route path={paths.movieDetails} element={<MovieDetailsPage />} />
            <Route path={paths.movieList} element={<MoviesPage />} />
      </Routes>
    </ThemeProvider>
    
  );
}

export default App;
