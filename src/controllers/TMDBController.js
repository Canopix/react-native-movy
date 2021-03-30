import { Config } from 'react-native-config';
import { HttpClient } from '@/controllers/HttpClient';

const LANGUAGE_RE = /^[a-z]{2}-[a-z]{2}$/;

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
  static async getNowPlaying({ page = 1, language = 'en-US' }) {
    checkParamInteger('page', page);
    checkParamRegExp('language', language, LANGUAGE_RE);
    const { data } = await HttpClient.get('/movie/now_playing', {
      api_key: Config.TMDB_API_KEY,
      page,
      language,
    });

    return data;
  }

  static async getPopular({ page = 1, language = 'en-US' }) {
    checkParamInteger('page', page);
    checkParamRegExp('language', language, LANGUAGE_RE);
    const { data } = await HttpClient.get('/movie/popular', {
      api_key: Config.TMDB_API_KEY,
      page,
      language,
    });
    return data;
  }

  static async getMovieDetails({ movie_id, language = 'en-US' }) {
    checkParamInteger('movie id', movie_id);
    checkParamRegExp('language', language, LANGUAGE_RE);
    const path = `/movie/${Math.floor(movie_id)}`;
    const { data } = await HttpClient.get(path, {
      api_key: Config.TMDB_API_KEY,
      language,
    });
    return data;
  }

  static async searchMovies({ query, page = 1, language = 'en-US' }) {
    checkParamRegExp('query', query, /^.+$/);
    checkParamInteger('page', page);
    checkParamRegExp('language', language, LANGUAGE_RE);
    const { data } = await HttpClient.get('/search/movie', {
      api_key: Config.TMDB_API_KEY,
      query,
      page,
      language,
    });
    return data;
  }
} // class TMDBController
