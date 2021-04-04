import { TYPES } from '@/actions/MoviesActions';

const INITIAL_STATE = {};

export const tmdbConfigurationReducer = (
  state = INITIAL_STATE,
  { payload, type }
) => {
  switch (type) {
    case TYPES.GET_API_CONFIG:
      return payload;
    default:
      return state;
  }
};
