import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button/Button";
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import MovieItemDetails from "../components/MovieItemDetails/MovieItemDetails";
import { Movie } from "../interfaces";
import { getMovieDetails } from '../services/MovieService';
import errorPagesMap from "../utils/errorPagesMap";

const MovieDetailsPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [movie, setMovie] = useState<Movie | null>(null);

    const backHandler = () => navigate('/', { replace: true });

    const fetchMovieDetails = async (id: string): Promise<void> => {
        const fetchedMovie = await getMovieDetails(id);
        setMovie(fetchedMovie);
    }

    useEffect(() => {
        if (!id) return;
        fetchMovieDetails(id);
    }, []);

    return (
        <>
            <Button text="Back" onClick={backHandler} />
            {movie ? 
                <MovieItemDetails movie={movie} /> : 
                <ErrorMessage status="404" text={errorPagesMap['404']} />
            }
        </>
    );
}

export default MovieDetailsPage;