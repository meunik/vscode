import axios from 'axios';

const urlDev = 'http://localhost:3000'
const urlProd = 'https://meunik.github.io/'

const api = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? urlDev : urlProd,
});

export {
    api,
    urlDev
}