import { TYPES } from '@/actions/MoviesActions';
import { movieData } from '@/reducers/utils';

const INITIAL_STATE = null;

export const nowPlayingReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case TYPES.GET_NOW_PLAYING_SUCCESS:
      if (Array.isArray(payload)) {
        return movieData(payload[0]);
      }
      return movieData(payload);
    case TYPES.GET_MOVIE_DETAILS_SUCCESS:
      if (payload?.id && state?.id === payload.id) {
        return { ...state, ...movieData(payload) };
      }
      return state;
    default:
      return state;
  }
};
