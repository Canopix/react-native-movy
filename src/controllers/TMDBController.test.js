import { Config } from 'react-native-config';
import { TMDBController } from '@/controllers/TMDBController';

const checkMovieRecord = movie => {
  expect(typeof movie).toBe('object');
  expect(typeof movie?.id).toBe('number');
};

describe('TMDBController', () => {
  it('should be defined as expected', () => {
    expect(typeof TMDBController).toBe('function');
    expect(typeof TMDBController?.getNowPlaying).toBe('function');
    expect(typeof TMDBController?.getPopular).toBe('function');
    expect(typeof TMDBController?.getMovieDetails).toBe('function');
    expect(typeof TMDBController?.searchMovies).toBe('function');
  });

  if (!Config.TMDB_API_KEY) {
    console.log(
      "No TMDB_API_KEY available. TMDB's API endpoints won't be tested."
    );
  } else {
    it('method getNowPlaying should get a list of movies', async () => {
      const nowPlaying = await TMDBController.getNowPlaying();
      expect(typeof nowPlaying).toBe('object');
      expect(nowPlaying?.page).toBe(1);
      expect(Array.isArray(nowPlaying?.results)).toBe(true);
      nowPlaying?.results?.forEach(checkMovieRecord);
    });

    it('method getPopular should get a list of movies', async () => {
      const getPopular = await TMDBController.getPopular();
      expect(typeof getPopular).toBe('object');
      expect(getPopular?.page).toBe(1);
      expect(Array.isArray(getPopular?.results)).toBe(true);
      getPopular?.results?.forEach(checkMovieRecord);
    });

    it('method getMovieDetails should get a movie', async () => {
      expect(TMDBController.getMovieDetails()).rejects.toThrow();
      const { results: movies } = await TMDBController.getNowPlaying();
      const getMovieDetails = await TMDBController.getMovieDetails({
        movie_id: movies[0].id,
      });
      checkMovieRecord(getMovieDetails);
    });

    it('method searchMovies should get a list of movies', async () => {
      expect(TMDBController.searchMovies()).rejects.toThrow();
      const searchMovies = await TMDBController.searchMovies({
        query: 'battle',
      });
      expect(typeof searchMovies).toBe('object');
      expect(searchMovies?.page).toBe(1);
      expect(Array.isArray(searchMovies?.results)).toBe(true);
      searchMovies?.results?.forEach(checkMovieRecord);
    });
  }
});
