/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView } from 'react-native';
import { getNowPlaying as nowPlayingSelector } from '@/selectors/MovieSelectors';
import { getNowPlaying, getAPIConfiguration } from '@/actions/MoviesActions';
import MoviesList from '@/components/MoviesList';
import PrincipalMovie from '@/components/PrincipalMovie';
import { list } from '@/screens/Home/test-data';

export function Home() {
  const dispatch = useDispatch();
  const nowPlaying = useSelector(nowPlayingSelector);

  useEffect(() => {
    dispatch(getAPIConfiguration());
    dispatch(getNowPlaying());
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="always"
    >
      <PrincipalMovie movie={nowPlaying} />
      <MoviesList title="My List" movies={list} />
      <MoviesList title="Trending Now" movies={list} />
    </ScrollView>
  );
}
