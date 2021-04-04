import { TYPES } from '@/actions/MoviesActions';
import { movieData } from '@/reducers/utils';

const INITIAL_STATE = null;

export const popularReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case TYPES.GET_POPULAR:
      if (Array.isArray(payload)) {
        return movieData(payload?.[0]);
      } else {
        return movieData(payload);
      }
    default:
      return state;
  }
};
