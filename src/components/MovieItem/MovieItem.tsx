import React from "react";
import { useNavigate } from "react-router-dom";
import { Movie } from "../../interfaces";
import { MovieItemWrap } from "./MovieItem.style";
import { useGenresContext } from '../../contexts/GenresContext';
import MovieItemImg from '../MovieItemImg';

const MovieItem = (props: Movie) => {
    const navigate = useNavigate();
    
    const GenresContext: {genresMap: { [key: number]: string; }; isLoading: boolean} = useGenresContext();
    const genreNames = props.genreIds.map(id => GenresContext.genresMap[id]);
    const genreText = genreNames.join(', ');

    const clickHandler = () => navigate(`movie/${props.id}`, { replace: true });

    return (
        <MovieItemWrap onClick={clickHandler}>
            <MovieItemImg posterPath={props.posterPath} backdropPath={props.backdropPath} />
            <p><strong>Title:</strong> {props.title}</p>
            <p><strong>Genres:</strong> {genreText}</p>
            <p><strong>Release date:</strong> {props.releaseDate}</p>
        </MovieItemWrap>
    );
}

export default MovieItem;