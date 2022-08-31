import { Movie, ResponseMovie } from '../interfaces';
import apiClientV4 from './ApiClientV4';

export const getMovies = async (): Promise<Movie[]> => {
    const response = await apiClientV4.get(`list/1?api_key=${process.env.REACT_APP_API_KEY}`);

    const result: Movie[] = response.data.results.map((movie: ResponseMovie) => {
        return {
            id: movie.id,
            title: movie.title,
            posterPath: movie.poster_path,
            backdropPath: movie.backdrop_path,
            genreIds: movie.genre_ids,
            releaseDate: movie.release_date,
            overview: movie.overview
        }
    });

    return result;
}