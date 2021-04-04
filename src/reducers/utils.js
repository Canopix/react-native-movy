// Reducer utilities.

const parseDate = dateString => {
  const match = (dateString || '').match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) {
    return null;
  }
  const [, year, month, day] = match;
  return new Date(+year, +month - 1, +day);
};

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
    release_date: parseDate(release_date),
    vote_average,
    genres,
    poster_path,
  };
};
