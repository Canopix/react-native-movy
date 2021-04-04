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
  ...requestActionTypes('GET_NOW_PLAYING'),
  ...requestActionTypes('GET_POPULAR'),
  ...requestActionTypes('GET_MOVIE_DETAILS'),
  ...requestActionTypes('SEARCH_MOVIES'),
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
    const nowPlaying = await TMDBController.getMovieDetails({
      movie_id: movieId,
    });
    return nowPlaying.results;
  }
);

export const searchMovies = requestAction(TYPES.SEARCH_MOVIES, async query => {
  const nowPlaying = await TMDBController.searchMovies({ query });
  return nowPlaying.results;
});
