import axios from 'axios';
import url from './url'

const BASE_URL = url;

const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: false,
});

export default api;