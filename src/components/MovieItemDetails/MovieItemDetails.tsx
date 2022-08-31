import React from "react";
import { Movie } from "../../interfaces";
import { InfoWrap, ItemDetailsWrap } from "./MoveItemDetails.style";
import { useGenresContext } from '../../contexts/GenresContext';

interface MovieItemDetailsProps {
    movie: Movie;
}

const MovieItemDetails = ({movie}: MovieItemDetailsProps) => {
    const GenresContext: {genresMap: { [key: number]: string; }; isLoading: boolean} = useGenresContext();
    const genreNames = movie.genreIds.map(id => GenresContext.genresMap[id]);
    const genreText = genreNames.join(', ');

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
                <p>{genreText}</p>
                <strong>Release date</strong>
                <p>{movie.releaseDate}</p>
            </InfoWrap>
        </ItemDetailsWrap>
    );
}

export default MovieItemDetails;