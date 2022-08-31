import React, { useEffect, useState } from 'react';
import Button from "../components/Button/Button";
import Loader from '../components/Loader/Loader';
import MovieList from '../components/MovieList/MovieList';
import SearchInput from '../components/SearchInput/SearchInput';
import { useGenresContext } from '../contexts/GenresContext';
import { Movie } from '../interfaces';
import { getMovies } from '../services/MovieService';

const MoviesPage = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setisLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);

    const GenresContext: { genresMap: { [key: number]: string; }; isLoading: boolean } = useGenresContext();

    const fetchMovies = async (): Promise<void> => {
        setisLoading(true);
        const movieList = await getMovies(page);
        setMovies([...movies, ...movieList]);
        setisLoading(false);
        setPage(prev => prev + 1);
    }

    const searchHandler = (movies: Movie[]): void => {
        setMovies(movies);
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <section>
            {(!GenresContext.isLoading) ?
                (<>
                    <SearchInput onSearch={searchHandler} />
                    <MovieList movies={movies} />
                    {(!isLoading) ? <Button text="Load more" onClick={fetchMovies} /> : <Loader />}
                </>) :
                <Loader />
            }
        </section>
    );
}

export default MoviesPage;