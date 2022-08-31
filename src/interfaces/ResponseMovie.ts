export interface ResponseMovie {
    id: number;
    title: string;
    poster_path: string;
    backdrop_path: string;
    genre_ids: number[];
    release_date: string;
    overview: string;
}