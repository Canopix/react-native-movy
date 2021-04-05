import { TYPES } from '@/actions/MoviesActions';
import { movieData } from '@/reducers/utils';

const INITIAL_STATE = null;

export const popularReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case TYPES.GET_POPULAR_SUCCESS:
      return payload.map(movieData);
    case TYPES.GET_MOVIE_DETAILS_SUCCESS:
      return state.map(m => {
        if (m.id === payload.id) {
          return { ...m, ...movieData(payload) };
        }
        return m;
      });
    default:
      return state;
  }
};
