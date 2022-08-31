import React from "react";
import { useNavigate } from "react-router-dom";
import { Movie } from "../../interfaces";
import { MovieItemWrap } from "./MovieItem.style";

const MovieItem = (props: Movie) => {
    const navigate = useNavigate();
    
    const imgSrcUrl = props.posterPath ? props.posterPath : props.backdropPath;
    const imgSrc = `${process.env.REACT_APP_IMG_URL}${imgSrcUrl}?api_key=${process.env.REACT_APP_API_KEY}`;

    const clickHandler = () => {
        navigate(`movie/${props.id}`, { replace: true, state: props });
    }

    return (
        <MovieItemWrap onClick={clickHandler}>
            <img src={imgSrc} />
            <p><strong>Title:</strong> {props.title}</p>
            <p><strong>Genres:</strong> {props.genreIds}</p>
            <p><strong>Release date:</strong> {props.releaseDate}</p>
        </MovieItemWrap>
    );
}

export default MovieItem;