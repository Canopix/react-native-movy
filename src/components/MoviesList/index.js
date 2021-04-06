/* eslint-disable react-native-a11y/has-valid-accessibility-ignores-invert-colors */
import React from 'react';
import { View, TouchableOpacity, ScrollView, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

function MoviesList({ title, movies, navigation, onEmpty }) {
  const movieRenderer = movie => (
    <TouchableOpacity
      key={movie.id}
      activeOpacity={0.6}
      onPress={() => navigation.navigate('Details', { movie })}
    >
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{ uri: movie.poster_url }}
      />
    </TouchableOpacity>
  );
  const emptyList = !movies || movies.length < 1;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      {emptyList ? (
        <View style={styles.emptyView}>
          <Text style={styles.emptyText}>{onEmpty}</Text>
        </View>
      ) : (
        <ScrollView
          horizontal={true}
          keyboardShouldPersistTaps="always"
          showsHorizontalScrollIndicator="false"
          contentContainerStyle={styles.scrollView}
        >
          {movies.map(movieRenderer)}
        </ScrollView>
      )}
    </View>
  );
}

MoviesList.propTypes = {
  title: PropTypes.string,
  movies: PropTypes.array,
  navigation: PropTypes.object,
  onEmpty: PropTypes.string,
};

export default MoviesList;
