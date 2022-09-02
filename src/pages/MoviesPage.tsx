import React, { useEffect, useState } from 'react';
import Button from "../components/Button/Button";
import Loader from '../components/Loader/Loader';
import MovieList from '../components/MovieList/MovieList';
import SearchInput from '../components/SearchInput/SearchInput';
import { useGenresContext } from '../contexts/GenresContext';
import { MovieData } from '../interfaces';
import { getMovies } from '../services/MovieService';

const MoviesPage = () => {
    const [movieData, setMovieData] = useState<MovieData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const GenresContext: { genresMap: { [key: number]: string; }; isLoading: boolean } = useGenresContext();

    const fetchMovies = async (): Promise<void> => {
        setIsLoading(true);
        const nextPage = movieData ? ++movieData.page : 1;
        const fetchedMovieData = await getMovies(nextPage);
        let movies = movieData?.results || [];
        fetchedMovieData.results = [...movies, ...fetchedMovieData.results];
        setMovieData(fetchedMovieData);
        setIsLoading(false);
    }

    const searchHandler = (movieData: MovieData): void => setMovieData(movieData);

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <section>
            {(!GenresContext.isLoading) ?
                (<>
                    <SearchInput onSearch={searchHandler} />
                    <MovieList movies={movieData?.results ? movieData.results : []} />
                    {(!isLoading && movieData && movieData.page < movieData.totalPages) ? <Button text="Load more" onClick={fetchMovies} /> : <Loader />}
                </>) :
                <Loader />
            }
        </section>
    );
}

export default MoviesPage;