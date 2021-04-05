import { TYPES } from '@/actions/MoviesActions';
import {
  INITIAL_STATE,
  tmdbConfigurationReducer,
} from '@/reducers/TMDBConfigurationReducer';
import { TMDB_CONFIGURATION } from '@/test-utils/testData';

describe('TMDBConfigurationReducer', () => {
  it('should return the initial state', () => {
    expect(tmdbConfigurationReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle actions with type GET_API_CONFIG', () => {
    const action = {
      type: TYPES.GET_API_CONFIG,
      payload: TMDB_CONFIGURATION,
    };
    expect(tmdbConfigurationReducer(INITIAL_STATE, action)).toEqual(
      TMDB_CONFIGURATION
    );
  });
});
