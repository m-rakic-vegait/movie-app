import React, { useEffect, useState } from 'react';
import Button from "../components/Button/Button";
import Loader from '../components/Loader/Loader';
import MovieList from '../components/MovieList/MovieList';
import SearchInput from '../components/SearchInput/SearchInput';
import { useGenresContext } from '../contexts/GenresContext';
import { MovieData } from '../interfaces';
import { getMovies, searchMovies } from '../services/MovieService';

const MoviesPage = () => {
    const [movieData, setMovieData] = useState<MovieData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isSearchUsed, setIsSearchUsed] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const GenresContext: { genresMap: { [key: number]: string; }; isLoading: boolean } = useGenresContext();

    const fetchMovies = async (isSearchUsed: boolean): Promise<void> => {
        setIsLoading(true);
        const nextPage = movieData ? ++movieData.page : 1;

        let fetchedMovieData;
        if (!isSearchUsed) {
            fetchedMovieData = await getMovies(nextPage);
        }
        else {
            fetchedMovieData = await searchMovies(searchTerm, nextPage);
        }

        let movies = movieData?.results || [];
        fetchedMovieData.results = [...movies, ...fetchedMovieData.results];
        setMovieData(fetchedMovieData);
        setIsLoading(false);
    }

    const searchHandler = (param: { movieData: MovieData;  isSearchUsed: boolean; term: string; }): void => {
        setIsSearchUsed(param.isSearchUsed);
        setSearchTerm(param.term);
        setMovieData(param.movieData);
    }

    const loadMoreHandler = async () => {
        fetchMovies(isSearchUsed);
    }

    useEffect(() => {
        fetchMovies(isSearchUsed);
    }, []);

    return (
        <section>
            {(!GenresContext.isLoading) ?
                (<>
                    <SearchInput onSearch={searchHandler} page={movieData ? movieData.page : 1} />
                    <MovieList movies={movieData?.results ? movieData.results : []} />
                    {(!isLoading && movieData && movieData.page < movieData.totalPages) ? <Button text="Load more" onClick={loadMoreHandler} /> : <Loader />}
                </>) :
                <Loader />
            }
        </section>
    );
}

export default MoviesPage;