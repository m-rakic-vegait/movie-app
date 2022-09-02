import { Movie } from './Movie';

export interface MovieData {
    results: Movie[];
    page: number;
    totalPages: number;
    totalResults: number;
}