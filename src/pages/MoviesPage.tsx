import React, { useState, useEffect } from 'react';
import SearchInput from '../components/SearchInput/SearchInput';
import MovieList from '../components/MovieList/MovieList';
import { getMovies } from '../services/Movies';
import { Movie, ResponseMovie } from '../interfaces';
import Loader from '../components/Loader/Loader';

const MoviesPage = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    const fetchMovies = async (): Promise<void> => {
        const responseData = await getMovies();

        const result: Movie[] = responseData.results.map((movie: ResponseMovie) => {
            return {
                id: movie.id,
                title: movie.title,
                posterPath: movie.poster_path,
                backdropPath: movie.backdrop_path,
                genreIds: movie.genre_ids,
                releaseDate: movie.release_date,
                overview: movie.overview
            }
        });

        setMovies(result);
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <section>
            {movies.length > 0 ? 
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