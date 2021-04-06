/* eslint-disable react-native-a11y/has-valid-accessibility-ignores-invert-colors */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useTheme } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View, ImageBackground, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faPlayCircle,
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';
import { styles } from './Details.styles';
import {
  addToUserList,
  deleteFromUserList,
  getMovieDetails,
} from '@/actions/MoviesActions';
import Genres from '@/components/Genres';
import { userListSelector } from '@/selectors/MovieSelectors';
import { TextStyles } from '@/theme';

export function Details({ route, navigation }) {
  const { movie } = route.params;
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const userList = useSelector(userListSelector);
  const movieInList = userList.find(({ id }) => id === movie?.id);

  console.group('movie');
  console.log(movie);
  console.groupEnd();

  useEffect(() => {
    dispatch(getMovieDetails(movie.id));
  }, []);

  const onPressMyList = () => {
    if (movie) {
      if (movieInList) {
        dispatch(deleteFromUserList(movie));
      } else {
        dispatch(addToUserList(movie));
      }
    }
  };

  if (!movie) return null;
  return (
    <View>
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: movie?.poster_url,
          }}
          style={styles.backgroundImage}
        >
          <LinearGradient
            colors={['transparent', 'black']}
            style={styles.linearGradient}
          >
            <View style={styles.backContainer}>
              <Pressable onPress={() => navigation.goBack()}>
                <Text style={styles.back}>Back</Text>
              </Pressable>
            </View>

            <View style={styles.subcontainer}>
              <View style={styles.itemsContainer}>
                <Text style={styles.title}>{movie.title}</Text>
                <View style={styles.iconLabel}>
                  <FontAwesomeIcon
                    icon={faPlayCircle}
                    style={styles.icon}
                    size={64}
                  />
                </View>
              </View>
              <Genres genres={movie.genres} />
              <Pressable onPress={() => onPressMyList()}>
                <View style={styles.items}>
                  <FontAwesomeIcon
                    icon={movieInList ? faMinus : faPlus}
                    style={styles.icon}
                    size={16}
                  />
                  <Text style={[TextStyles.label, { color: colors.text }]}>
                    {movieInList ? 'Remove from My List' : 'Add to My List'}
                  </Text>
                </View>
              </Pressable>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
      <View style={styles.overviewContainer}>
        <Text
          style={styles.overview}
        >{`Rating: ${movie.vote_average}/10`}</Text>
        <Text style={styles.overview}>{movie.overview}</Text>
      </View>
    </View>
  );
}
