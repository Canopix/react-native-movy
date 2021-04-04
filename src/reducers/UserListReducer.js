import { TYPES } from '@/actions/MoviesActions';
import { movieData } from '@/reducers/utils';

const INITIAL_STATE = [];

const removeById = (movies, idToRemove) => {
  return idToRemove ? movies.filter(({ id }) => id !== idToRemove) : movies;
};

export const userListReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case TYPES.USER_LIST_ADD:
      const newState = removeById(payload?.id);
      newState.push(movieData(payload));
      return newState;
    case TYPES.USER_LIST_REMOVE:
      return removeById(payload?.id);
    default:
      return state;
  }
};
