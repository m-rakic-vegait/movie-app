import axios from 'axios';

const apiClientV3 = axios.create({
    baseURL: process.env.REACT_APP_URL_V3
});

export default apiClientV3;