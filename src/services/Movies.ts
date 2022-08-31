import apiClientV4 from './ApiClientV4';

export const getMovies = async () => {
    const response = await apiClientV4.get(`list/1?api_key=${process.env.REACT_APP_API_KEY}`);
    return response.data;
}