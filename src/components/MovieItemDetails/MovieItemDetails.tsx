import { Movie } from "../../interfaces";

interface MovieItemDetailsProps {
    movie: Movie;
}

const MovieItemDetails = ({movie}: MovieItemDetailsProps) => {
    return (
        <section>
            <h1>Movie item details</h1>
            <p>{movie.title}</p>
        </section>
    );
}

export default MovieItemDetails;