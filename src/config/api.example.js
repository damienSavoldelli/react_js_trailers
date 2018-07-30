// Api Movie data base (https://api.themoviedb.org/)

// Définition des constantes
const key = '[API_KEY_TMDB]';
const tokenRead = '[API_TOKE_READ_TMDB]';

export const API_END_POINT = 'https://api.themoviedb.org/3/';
export const POPULAR_MOVIES_URL = 'discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images';
export const API_KEY = `api_key=${key}`;

export const IMG_THUMB_BASE_URL = 'https://image.tmdb.org/t/p/w200';
