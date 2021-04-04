// Reducer utilities.

export const movieData = movieRecord => {
  if (!movieRecord) {
    return null;
  }
  const {
    id,
    poster_path,
    title,
    genres = null,
    overview,
    release_date,
    vote_average,
  } = movieRecord;
  return {
    id,
    title,
    overview,
    release_date, //TODO Convert date string to actual Date.
    vote_average,
    genres,
    poster_path,
  };
};
