import React from "react";
import { useNavigate } from "react-router-dom";
import { Movie } from "../../interfaces";
import { MovieItemWrap } from "./MovieItem.style";

const MovieItem = (props: Movie) => {
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate(`movie/${props.id}`, { replace: true, state: props });
    }

    return (
        <MovieItemWrap onClick={clickHandler}>
            <img src='https://m.media-amazon.com/images/M/MV5BNzU4NWEwNDItMzMzYy00ZDYyLWIxZjMtMDlkYWVjNjQwYzBjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg' />

            <p><strong>Title:</strong> {props.title}</p>
            {/* <p>{props.backdropPath}</p> */}
            <p><strong>Genres:</strong> {props.genreIds}</p>
            <p><strong>Release date:</strong> {props.releaseDate}</p>
        </MovieItemWrap>
    );
}

export default MovieItem;