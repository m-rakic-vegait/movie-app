export interface Movie {
    id: number;
    title: string;
    posterPath: string;
    backdropPath: string;
    genreIds: number[];
    releaseDate: string;
    overview: string;
}