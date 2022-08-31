import React, { useState, useEffect } from 'react';
import SearchInput from '../components/SearchInput/SearchInput';
import MovieList from '../components/MovieList/MovieList';
import { getMovies } from '../services/Movies';
import { Movie } from '../interfaces';
import Loader from '../components/Loader/Loader';

const MoviesPage = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setisLoading] = useState<boolean>(false);

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
            {!isLoading ? 
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