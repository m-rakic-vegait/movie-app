import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://api.themoviedb.org'
});

export default apiClient;