/* eslint-disable react-native-a11y/has-valid-accessibility-ignores-invert-colors */
import React from 'react';
import { View, TouchableOpacity, ScrollView, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

function MoviesList({ title, movies, navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>

      <ScrollView
        horizontal={true}
        keyboardShouldPersistTaps="always"
        showsHorizontalScrollIndicator="false"
        contentContainerStyle={styles.scrollView}
      >
        {(movies || []).map(movie => (
          <TouchableOpacity
            key={movie.id}
            activeOpacity={0.6}
            onPress={() => navigation.navigate('Profile', { movie })}
          >
            <Image
              style={styles.image}
              resizeMode="contain"
              source={{
                uri: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
              }}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

MoviesList.propTypes = {
  title: PropTypes.string,
  movies: PropTypes.array,
  navigation: PropTypes.object,
};

export default MoviesList;
