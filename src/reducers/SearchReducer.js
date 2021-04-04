import { TYPES } from '@/actions/MoviesActions';
import { movieData } from '@/reducers/utils';

const INITIAL_STATE = {
  query: null,
  results: [],
};

export const searchReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case TYPES.SEARCH_MOVIES:
      return {
        ...state,
        query: payload?.query,
        search: payload?.results?.map(movieData),
      };
    default:
      return state;
  }
};
