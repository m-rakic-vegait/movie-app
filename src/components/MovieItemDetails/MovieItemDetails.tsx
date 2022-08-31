import React from "react";
import { Movie } from "../../interfaces";
import { InfoWrap, ItemDetailsWrap } from "./MoveItemDetails.style";

interface MovieItemDetailsProps {
    movie: Movie;
}

const MovieItemDetails = ({movie}: MovieItemDetailsProps) => {
    const imgSrcUrl = movie.posterPath ? movie.posterPath : movie.backdropPath;
    const imgSrc = `${process.env.REACT_APP_IMG_URL}${imgSrcUrl}?api_key=${process.env.REACT_APP_API_KEY}`;

    return (
        <ItemDetailsWrap>
            <img src={imgSrc} />
            <InfoWrap>
                <strong>Title</strong>
                <p>{movie.title}</p>
                <strong>Overview</strong>
                <p>{movie.overview}</p>
                <strong>Genres</strong>
                <p>{movie.genreIds}</p>
                <strong>Release date</strong>
                <p>{movie.releaseDate}</p>
            </InfoWrap>
        </ItemDetailsWrap>
    );
}

export default MovieItemDetails;