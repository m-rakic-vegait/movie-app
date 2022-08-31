import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import MovieItemDetails from "../components/MovieItemDetails/MovieItemDetails";
import { Movie } from "../interfaces";

const MovieDetailsPage = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const backHandler = () => {
        navigate('/', { replace: true });
    }

    return (
        <>
            <Button text="Back" onClick={backHandler} />
            <MovieItemDetails movie={state as Movie} />
        </>
    );
}

export default MovieDetailsPage;