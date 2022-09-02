import { Movie, ResponseMovie, Genre } from '../interfaces';
import apiClient from './ApiClient';

export const getMovies = async (page: number): Promise<Movie[]> => {
    const response = await apiClient.get(`3/movie/top_rated?page=${page}&api_key=${process.env.REACT_APP_API_KEY}`);
    const movies: Movie[] = processMovies(response.data.results);
    return movies;
}

export const getGenres = async () => {
    const response = await apiClient.get(`3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`);
    let genresMap: { [key: number]: string; } = {};
    response.data.genres.forEach((genre: Genre) => genresMap[genre.id] = genre.name);
    return genresMap;
}

export const searchMovies = async (term: string): Promise<Movie[]> => {
    const response = await apiClient.get(`4/search/movie?query=${term}&api_key=${process.env.REACT_APP_API_KEY}`);
    const movies: Movie[] = processMovies(response.data.results);
    return movies;
}

const processMovies = (movies: ResponseMovie[]): Movie[] => {
    const processedMovies: Movie[] = movies.map((movie: ResponseMovie) => {
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

    return processedMovies;
}