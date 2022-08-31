import React from "react";
import { useNavigate } from "react-router-dom";
import { Movie } from "../../interfaces";
import { MovieItemWrap } from "./MovieItem.style";
import { useGenresContext } from '../../contexts/GenresContext';

const MovieItem = (props: Movie) => {
    const navigate = useNavigate();
    const GenresContext: {genresMap: { [key: number]: string; }; isLoading: boolean} = useGenresContext();
    
    const imgSrcUrl = props.posterPath ? props.posterPath : props.backdropPath;
    const imgSrc = `${process.env.REACT_APP_IMG_URL}${imgSrcUrl}?api_key=${process.env.REACT_APP_API_KEY}`;

    const genreNames = props.genreIds.map(id => GenresContext.genresMap[id]);
    const genreText = genreNames.join(', ');

    const clickHandler = () => {
        navigate(`movie/${props.id}`, { replace: true, state: props });
    }

    return (
        <MovieItemWrap onClick={clickHandler}>
            <img src={imgSrc} />
            <p><strong>Title:</strong> {props.title}</p>
            <p><strong>Genres:</strong> {genreText}</p>
            <p><strong>Release date:</strong> {props.releaseDate}</p>
        </MovieItemWrap>
    );
}

export default MovieItem;