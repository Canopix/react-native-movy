import { TMDBController } from '@/controllers/TMDBController';

const requestActionTypes = key =>
  Object.fromEntries(
    ['', '_REQUEST', '_SUCCESS', '_ERROR', '_RESET'].map(suffix => {
      const newKey = `${key}${suffix}`;
      return [newKey, newKey];
    })
  );

export const TYPES = {
  CLEAR_STORE: 'CLEAR_STORE',
  ...requestActionTypes('GET_API_CONFIG'),
  ...requestActionTypes('GET_NOW_PLAYING'),
  ...requestActionTypes('GET_POPULAR'),
  ...requestActionTypes('GET_MOVIE_DETAILS'),
  ...requestActionTypes('SEARCH_MOVIES'),
  USER_LIST_ADD: 'USER_LIST_ADD',
  USER_LIST_REMOVE: 'USER_LIST_REMOVE',
};

const requestAction = (key, actionFun) => (...args) => async dispatch => {
  dispatch({
    type: TYPES[`${key}_REQUEST`],
    payload: null,
  });
  try {
    const payload = await actionFun(...args);
    dispatch({
      type: TYPES[`${key}_SUCCESS`],
      payload,
    });
  } catch (error) {
    dispatch({
      type: TYPES[`${key}_ERROR`],
      payload: error.message,
    });
  }
};

export const getAPIConfiguration = requestAction(
  TYPES.GET_API_CONFIG,
  async () => {
    const configuration = await TMDBController.configuration();
    return configuration;
  }
);

export const getNowPlaying = requestAction(TYPES.GET_NOW_PLAYING, async () => {
  const nowPlaying = await TMDBController.getNowPlaying();
  return nowPlaying.results;
});

export const getPopular = requestAction(TYPES.GET_POPULAR, async () => {
  const popular = await TMDBController.getPopular();
  return popular.results;
});

export const getMovieDetails = requestAction(
  TYPES.GET_MOVIE_DETAILS,
  async movieId => {
    const movieDetails = await TMDBController.getMovieDetails({
      movie_id: movieId,
    });
    return movieDetails;
  }
);

export const searchMovies = requestAction(TYPES.SEARCH_MOVIES, async query => {
  const search = await TMDBController.searchMovies({ query });
  return {
    query,
    ...search,
  };
});

export const addToUserList = movieId => ({
  type: TYPES.USER_LIST_ADD,
  payload: { movieId },
});

export const deleteFromUserList = movieId => ({
  type: TYPES.USER_LIST_REMOVE,
  payload: { movieId },
});
