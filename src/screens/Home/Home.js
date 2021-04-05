/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pressable, ScrollView } from 'react-native';
import {
  nowPlayingSelector,
  popularSelector,
  userListSelector,
} from '@/selectors/MovieSelectors';
import {
  getAPIConfiguration,
  getNowPlaying,
  getPopular,
  getMovieDetails,
} from '@/actions/MoviesActions';
import MoviesList from '@/components/MoviesList';
import PrincipalMovie from '@/components/PrincipalMovie';
// import { list } from '@/screens/Home/test-data';

export function Home() {
  const [nowPlayingIndex, setNowPlayingIndex] = useState(0);
  const dispatch = useDispatch();
  const nowPlaying = useSelector(nowPlayingSelector);
  const popular = useSelector(popularSelector);
  const userList = useSelector(userListSelector);

  useEffect(() => {
    dispatch(getAPIConfiguration());
    dispatch(getNowPlaying()).then(async movies => {
      for (const movie of movies) {
        await dispatch(getMovieDetails(movie?.id));
      }
    });
    dispatch(getPopular()).then(async movies => {
      for (const movie of movies) {
        await dispatch(getMovieDetails(movie?.id));
      }
    });
  }, []);

  const incNowPlayingIndex = () => {
    if (nowPlaying?.length) {
      setNowPlayingIndex((nowPlayingIndex + 1) % nowPlaying.length);
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="always"
    >
      <Pressable onPress={incNowPlayingIndex}>
        <PrincipalMovie movie={nowPlaying?.[nowPlayingIndex]} />
      </Pressable>
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
