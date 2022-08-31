import React from "react";
import { useNavigate } from "react-router-dom";
import { Movie } from "../../interfaces";
import { MovieItemWrap } from "./MovieItem.style";

const MovieItem = (props: Movie) => {
    const navigate = useNavigate();
    
    // set image source url
    const imgSrcUrl = props.posterPath ? props.posterPath : props.backdropPath;
    const imgSrc = `${process.env.REACT_APP_IMG_URL}${imgSrcUrl}?api_key=${process.env.REACT_APP_API_KEY}`;

    // navigate to movie details page,
    // sent props because the movie has all info there,
    // so it is not necessary to call api for that
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