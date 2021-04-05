import { Config } from 'react-native-config';
import { HttpClient } from '@/controllers/HttpClient';

const LANGUAGE_RE = /^[a-zA-Z]{2}-[a-zA-Z]{2}$/;

const checkParamInteger = (name, value) => {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    throw new TypeError(`Invalid ${name} ${value}!`);
  }
};

const checkParamRegExp = (name, value, regexp) => {
  if (typeof value !== 'string' || !regexp.test(value)) {
    throw new TypeError(`Invalid ${name} "${value}"!`);
  }
};

// See <https://developers.themoviedb.org/3>.
export class TMDBController {
  static async configuration() {
    const params = {
      api_key: Config.TMDB_API_KEY,
    };
    const response = await HttpClient.get('/configuration', { params });
    return response;
  }

  static async getNowPlaying(args) {
    const { page = 1, language = 'en-US' } = args || {};
    checkParamInteger('page', page);
    checkParamRegExp('language', language, LANGUAGE_RE);
    const params = {
      api_key: Config.TMDB_API_KEY,
      page,
      language,
    };
    const response = await HttpClient.get('/movie/now_playing', { params });
    return response;
  }

  static async getPopular(args) {
    const { page = 1, language = 'en-US' } = args || {};
    checkParamInteger('page', page);
    checkParamRegExp('language', language, LANGUAGE_RE);
    const params = {
      api_key: Config.TMDB_API_KEY,
      page,
      language,
    };
    const response = await HttpClient.get('/movie/popular', { params });
    return response;
  }

  static async getMovieDetails(args) {
    const { movie_id, language = 'en-US' } = args || {};
    checkParamInteger('movie id', movie_id);
    checkParamRegExp('language', language, LANGUAGE_RE);
    const path = `/movie/${Math.floor(movie_id)}`;
    const params = {
      api_key: Config.TMDB_API_KEY,
      language,
    };
    const response = await HttpClient.get(path, { params });
    return response;
  }

  static async searchMovies(args) {
    const { query, page = 1, language = 'en-US' } = args || {};
    checkParamRegExp('query', query, /^.+$/);
    checkParamInteger('page', page);
    checkParamRegExp('language', language, LANGUAGE_RE);
    const params = {
      api_key: Config.TMDB_API_KEY,
      query,
      page,
      language,
    };
    const response = await HttpClient.get('/search/movie', { params });
    return response;
  }
} // class TMDBController
