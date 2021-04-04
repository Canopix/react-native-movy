import { combineReducers } from 'redux';
import { errorReducer } from '@/reducers/ErrorReducer';
import { statusReducer } from '@/reducers/StatusReducer';
import { userReducer } from '@/reducers/UserReducer';
import { tmdbConfigurationReducer } from '@/reducers/TMDBConfigurationReducer';
import { userListReducer } from '@/reducers/UserListReducer';
import { nowPlayingReducer } from '@/reducers/NowPlayingReducer';
import { popularReducer } from '@/reducers/PopularReducer';

export const rootReducer = combineReducers({
  error: errorReducer,
  status: statusReducer,
  user: userReducer,
  tmdbConfiguration: tmdbConfigurationReducer,
  userList: userListReducer,
  nowPlaying: nowPlayingReducer,
  popular: popularReducer,
});
