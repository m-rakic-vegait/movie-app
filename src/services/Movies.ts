import apiClient from './ApiClient';

export const getMovies = async () => {
    const response = await apiClient.get(`4/list/1?api_key=${process.env.REACT_APP_API_KEY}`);
    return response.data;
}