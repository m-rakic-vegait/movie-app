import axios from 'axios';

const apiClientV4 = axios.create({
    baseURL: process.env.REACT_APP_URL_V4
});

export default apiClientV4;