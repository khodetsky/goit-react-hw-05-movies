import axios from "axios";
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const GET_MOVIES_RULES = {
  trends: 'trends',
  search: 'search',
  details: 'details',
  credits: 'credits',
  reviews: 'reviews',
};

const getMovie = (rules, queryString, movieId) => {
    const API_KEY = 'b282a22ae665f5f17a32a077013d243c';
    const GET_RULES = {
        trends: '/trending/movie/day',
        search: '/search/movie',
        details: `/movie/${movieId}`,
        credits: `/movie/${movieId}/credits`,
        reviews: `/movie/${movieId}/reviews`,
    };

    const configAxios = {
        params: {
            api_key: API_KEY,
            language: 'en-US',
            include_adult: false,
        },
    };

    if (queryString) { configAxios.params.query = queryString };

    const resp = axios.get(GET_RULES[rules], configAxios);
    return resp;
};

export async function getMovies(rules, queryString, movieId) {
    try {
        const resp = await getMovie(rules, queryString, movieId);
        return resp.data;
    } catch (error) {
        return error;
    }
};

