import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;
const API_KEY = '4b2aa0e9105e7c70a2de3973dd6dcaa4';

export const fetchTrendingMovie = async () => {
    const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return data;
};

export const fetchSearchMovie = async (query) => {
    const { data } = await axios.get(`search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&page=1`);
    return data;
};

export const fetchInformationMovie = async (movieId) => {
    const { data } = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
    return data;
};

export const fetchActorsOfMovie = async (movieId) => {
    const { data } = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}`);
    return data;
};

export const fetchReviewsOfMovie = async (movieId) => {
    const { data } = await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}&page=1`);
    return data;
};
