import React, { useState, useEffect, useContext } from 'react';
import SearchInput from '../components/SearchInput/SearchInput';
import MovieList from '../components/MovieList/MovieList';
import { getMovies } from '../services/MovieService';
import { Movie } from '../interfaces';
import Loader from '../components/Loader/Loader';
import { useGenresContext } from '../contexts/GenresContext';

const MoviesPage = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setisLoading] = useState<boolean>(false);

    const GenresContext: {genresMap: { [key: number]: string; }; isLoading: boolean} = useGenresContext();

    const fetchMovies = async (): Promise<void> => {
        setisLoading(true);
        const movieList = await getMovies();
        setMovies(movieList);
        setisLoading(false);
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <section>
            {(!isLoading && !GenresContext.isLoading) ? 
            (<>
                <SearchInput />
                <MovieList movies={movies} />
            </>) :
            <Loader />
            }
        </section>
    );
}

export default MoviesPage;