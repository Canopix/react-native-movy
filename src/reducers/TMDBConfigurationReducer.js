import { TYPES } from '@/actions/MoviesActions';

export const INITIAL_STATE = {};

export const tmdbConfigurationReducer = (
  state = INITIAL_STATE,
  { payload, type }
) => {
  switch (type) {
    case TYPES.GET_API_CONFIG_SUCCESS:
      return payload;
    default:
      return state;
  }
};
