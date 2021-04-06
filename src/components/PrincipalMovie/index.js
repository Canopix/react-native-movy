/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Text, View, ImageBackground, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faInfoCircle,
  faPlayCircle,
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';
import { styles } from './styles';
import Genres from '@/components/Genres';
import {
  addToUserList,
  deleteFromUserList,
  getMovieDetails,
} from '@/actions/MoviesActions';
import { userListSelector } from '@/selectors/MovieSelectors';

const MAX_GENRES = 4;

const PrincipalMovie = ({ movie, navigation }) => {
  const dispatch = useDispatch();
  const userList = useSelector(userListSelector);
  const movieInList = userList.find(({ id }) => id === movie?.id);
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

  const renderGenre = ({ name }, i) => (
    <>
      {i > 0 && (
        <Text style={[TextStyles.label, { color: colors.text }]}>•</Text>
      )}
      <Text style={[TextStyles.label, { color: colors.text }]}>{name}</Text>
    </>
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: movie?.poster_url }}
        style={styles.backgroundImage}
      >
        <LinearGradient
          colors={['transparent', 'black']}
          style={styles.linearGradient}
        >
          <View style={styles.subcontainer}>
            <Genres genres={movie.genres} />

            <View style={styles.movyLabel}>
              <Text style={styles.textLabel}>MOVY ORIGINAL</Text>
            </View>
            <View style={styles.itemsContainer}>
              <Pressable onPress={onPressMyList}>
                <View style={styles.itemsSubContainer}>
                  <FontAwesomeIcon
                    icon={movieInList ? faMinus : faPlus}
                    style={styles.icon}
                    size={32}
                  />
                  <Text style={styles.itemText}>My List</Text>
                </View>
              </Pressable>
              <View style={styles.iconLabel}>
                <FontAwesomeIcon
                  icon={faPlayCircle}
                  style={styles.icon}
                  size={32}
                />
                <Text style={styles.itemText}>Play</Text>
              </View>
              <Pressable
                onPress={() => navigation.navigate('Details', { movie })}
              >
                <View style={styles.iconLabel}>
                  <FontAwesomeIcon
                    icon={faInfoCircle}
                    style={styles.icon}
                    size={32}
                  />
                  <Text style={styles.itemText}>Info</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default PrincipalMovie;
