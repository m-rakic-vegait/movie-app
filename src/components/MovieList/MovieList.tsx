import MovieItem from '../MovieItem/MovieItem';
import { Movie } from "../../interfaces";
import React from 'react';
import { ItemWrap, ListWrap } from './MovieList.style';

interface MovieListProps {
    movies: Movie[];
}

const MovieList = ({movies}: MovieListProps) => {
    return (
        <ListWrap>
            {movies.length > 0 ?
            (movies.map(movie =>
                <ItemWrap key={movie.id}>
                    <MovieItem 
                        id={movie.id}
                        title={movie.title}
                        posterPath={movie.posterPath}
                        backdropPath={movie.backdropPath}
                        genreIds={movie.genreIds}
                        releaseDate={movie.releaseDate}
                        overview={movie.overview} />
                </ItemWrap>
                )
             ) :
            (<p>No movies found.</p>)
            }
        </ListWrap>
    );
}

export default MovieList;