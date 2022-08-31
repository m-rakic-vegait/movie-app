import { Movie, ResponseMovie, Genre } from '../interfaces';
import apiClientV3 from './ApiClientV3';
import apiClientV4 from './ApiClientV4';

export const getMovies = async (): Promise<Movie[]> => {
    const response = await apiClientV4.get(`list/1?api_key=${process.env.REACT_APP_API_KEY}`);

    const movies: Movie[] = response.data.results.map((movie: ResponseMovie) => {
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

    return movies;
}

export const getGenres = async () => {
    const response = await apiClientV3.get(`genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`);

    let genresMap: { [key: number]: string; } = {};
    response.data.genres.forEach((genre: Genre) => genresMap[genre.id] = genre.name);
    return genresMap;
}