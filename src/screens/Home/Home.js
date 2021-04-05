/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView } from 'react-native';
import {
  nowPlayingSelector,
  popularSelector,
  userListSelector,
} from '@/selectors/MovieSelectors';
import {
  getAPIConfiguration,
  getNowPlaying,
  getPopular,
} from '@/actions/MoviesActions';
import MoviesList from '@/components/MoviesList';
import PrincipalMovie from '@/components/PrincipalMovie';
// import { list } from '@/screens/Home/test-data';

export function Home() {
  const dispatch = useDispatch();
  const nowPlaying = useSelector(nowPlayingSelector);
  const popular = useSelector(popularSelector);
  const userList = useSelector(userListSelector);

  useEffect(() => {
    dispatch(getAPIConfiguration());
    dispatch(getNowPlaying());
    dispatch(getPopular());
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="always"
    >
      <PrincipalMovie movie={nowPlaying} />
      <MoviesList
        title="My List"
        movies={userList}
        onEmpty="There are no movies on your list ... yet."
      />
      <MoviesList
        title="Trending Now"
        movies={popular}
        onEmpty="Loading. Please wait."
      />
    </ScrollView>
  );
}
