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
            {movies.map(movie =>
                <ItemWrap>
                    <MovieItem 
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        posterPath={movie.posterPath}
                        backdropPath={movie.backdropPath}
                        genreIds={movie.genreIds}
                        releaseDate={movie.releaseDate}
                        overview={movie.overview} />
                </ItemWrap>
                )
            }
        </ListWrap>
    );
}

export default MovieList;