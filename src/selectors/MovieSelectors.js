export const getNowPlaying = state => {
  return state.nowPlaying || null;
};

export const getPopular = state => {
  return state.popular || null;
};

export const getSearch = state => {
  return state.search || null;
};

export const getUserList = state => {
  return state.userList || null;
};
