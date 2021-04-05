import { TYPES } from '@/actions/MoviesActions';
import { movieData } from '@/reducers/utils';

const INITIAL_STATE = {
  query: null,
  results: [],
};

export const searchReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case TYPES.SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        query: payload?.query,
        results: payload?.results?.map(movieData),
      };
    case TYPES.GET_MOVIE_DETAILS_SUCCESS:
      return payload?.id && state?.results
        ? state.results.map(m => {
            if (m.id === payload.id) {
              return { ...m, ...movieData(payload) };
            }
            return m;
          })
        : state;
    default:
      return state;
  }
};
