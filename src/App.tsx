import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Header from './components/Header/Header';
import MovieDetailsPage from './pages/MovieDetailsPage';
import MoviesPage from './pages/MoviesPage';
import ErrorPage from './pages/ErrorPage';
import apiClient from './services/ApiClient';
import theme from './theme';
import errorPagesMap from './utils/errorPagesMap';
import paths from './utils/paths';

type OnlyStatusCodes = keyof typeof errorPagesMap;

const App = () => {
	const navigate = useNavigate();

	apiClient.interceptors.response.use(
		response => response,
		(error) => {
			let status: string = error.response.status.toString();
			if (!errorPagesMap[status as OnlyStatusCodes]) status = '500';
			navigate(`/error-page/${status}`, { replace: true });
		}
	);

	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Routes>
				<Route path={paths.movieDetails} element={<MovieDetailsPage />} />
				<Route path={paths.movieList} element={<MoviesPage />} />
				<Route path={paths.errorPage} element={<ErrorPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</ThemeProvider>
	);
}

export default App;
