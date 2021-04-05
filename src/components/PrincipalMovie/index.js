import React from 'react';
import { useTheme } from '@react-navigation/native';
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
import { TextStyles } from '@/theme';
import { addToUserList, deleteFromUserList } from '@/actions/MoviesActions';
import { userListSelector } from '@/selectors/MovieSelectors';

const MAX_GENRES = 4;

const PrincipalMovie = ({ movie }) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const userList = useSelector(userListSelector);
  const movieInList = userList.find(({ id }) => id === movie?.id);

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
            <View style={styles.items}>
              {(movie?.genres ?? []).slice(0, MAX_GENRES).map(renderGenre)}
            </View>
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
              <View style={styles.iconLabel}>
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  style={styles.icon}
                  size={32}
                />
                <Text style={styles.itemText}>Info</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default PrincipalMovie;
