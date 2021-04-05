// Utilities ///////////////////////////////////////////////////////////////////

const parseDate = date => {
  if (date instanceof Date) {
    return date;
  }
  const match = (date || '').match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) {
    return null;
  }
  const [, year, month, day] = match;
  return new Date(+year, +month - 1, +day);
};

const movieRecord = (state, movie) => {
  if (!movie) {
    return null;
  }
  const posterBaseURL =
    state.tmdbConfiguration?.images?.secure_base_url ||
    'https://image.tmdb.org/t/p/';
  const posterSize = 'w500'; //TODO Check this value.
  const posterPath = movie.poster_path;
  return {
    ...movie,
    poster_url:
      posterBaseURL && posterPath
        ? `${posterBaseURL}${posterSize}${posterPath}`
        : null,
    release_date: parseDate(movie.release_date),
  };
};

// Selectors ///////////////////////////////////////////////////////////////////

export const nowPlayingSelector = state => {
  const { nowPlaying } = state;
  return nowPlaying ? nowPlaying.map(m => movieRecord(state, m)) : null;
};

export const popularSelector = state => {
  const { popular } = state;
  return popular ? popular.map(m => movieRecord(state, m)) : null;
};

export const searchQuerySelector = state => {
  const { search } = state;
  return search ? search.query : null;
};

export const searchResultsSelector = state => {
  const { search } = state;
  return search?.results
    ? search.results.map(m => movieRecord(state, m))
    : null;
};

export const userListSelector = state => {
  const { userList } = state;
  return userList ? userList.map(m => movieRecord(state, m)) : null;
};
