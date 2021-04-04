import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { TMDBController } from '@/controllers/TMDBController';
import { TYPES, getAPIConfiguration } from '@/actions/MoviesActions';
import { TMDB_CONFIGURATION } from '@/test-utils/testData';

jest.mock('@/controllers/TMDBController', () => ({
  TMDBController: {
    configuration: jest.fn(),
    getNowPlaying: jest.fn(),
    getPopular: jest.fn(),
    getMovieDetails: jest.fn(),
    searchMovies: jest.fn(),
  },
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('MoviesActions', () => {
  it('should dispatch GET_API_CONFIG states', async () => {
    const initialState = {};
    const store = mockStore(initialState);
    TMDBController.configuration.mockResolvedValueOnce(TMDB_CONFIGURATION);
    await store.dispatch(getAPIConfiguration());
    expect(store.getActions()).toEqual([
      {
        type: TYPES.GET_API_CONFIG_REQUEST,
        payload: null,
      },
      {
        type: TYPES.GET_API_CONFIG_SUCCESS,
        payload: TMDB_CONFIGURATION,
      },
    ]);
    const errorMessage = 'Configuration error!';
    TMDBController.configuration.mockRejectedValueOnce(new Error(errorMessage));
    await store.dispatch(getAPIConfiguration());
    expect(store.getActions().slice(2)).toEqual([
      {
        type: TYPES.GET_API_CONFIG_REQUEST,
        payload: null,
      },
      {
        type: TYPES.GET_API_CONFIG_ERROR,
        payload: errorMessage,
      },
    ]);
  }); // it 'should dispatch GET_API_CONFIG states'

}); // describe
