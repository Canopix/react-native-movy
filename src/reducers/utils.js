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
    poster_path,
    title,
    genres,
    overview,
    release_date,
    vote_average,
  };
};
