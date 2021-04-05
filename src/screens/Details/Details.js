import React from 'react';
import { useTheme } from '@react-navigation/native';
import {
  Text,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { styles } from './Details.styles';
import { TextStyles } from '@/theme';

// const movie = {
//   id: 527774,
//   poster_path: '/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg',
//   title: 'Raya and the Last Dragon',
//   genres: null,
//   overview:
//     'Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.',
//   release_date: '2021-03-03T03:00:00.000Z',
//   vote_average: 8.3,
//   poster_url: 'https://image.tmdb.org/t/p/w500/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg',
// };

export function Details({ route, navigation }) {
  const { movie } = route.params;
  console.group('movie');
  console.log(movie);
  console.groupEnd();

  const { colors } = useTheme();

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
            <View
              style={{
                width: '100%',
                position: 'absolute',
                top: 60,
                left: 40,
              }}
            >
              <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <Text
                  style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}
                >
                  Back
                </Text>
              </TouchableWithoutFeedback>
            </View>

            <View style={styles.subcontainer}>
              <View style={styles.itemsContainer}>
                <Text
                  style={{ color: 'white', fontSize: 32, paddingRight: 10 }}
                >
                  {movie.title}
                </Text>
                <View style={styles.iconLabel}>
                  <FontAwesomeIcon
                    icon={faPlayCircle}
                    style={styles.icon}
                    size={64}
                  />
                </View>
              </View>
              <View style={styles.items}>
                <Text style={[TextStyles.label, { color: colors.text }]}>
                  Kids
                </Text>
                <Text style={[TextStyles.label, { color: colors.text }]}>
                  •
                </Text>
                <Text style={[TextStyles.label, { color: colors.text }]}>
                  Fantasy Movie
                </Text>
                <Text style={[TextStyles.label, { color: colors.text }]}>
                  •
                </Text>
                <Text style={[TextStyles.label, { color: colors.text }]}>
                  Action
                </Text>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
      <View
        style={{
          width: '100%',
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}
      >
        <Text
          style={{
            color: '#546f75',
            fontSize: 16,
            textAlign: 'justify',
            fontWeight: 'bold',
          }}
        >
          {movie.overview}
        </Text>
      </View>
    </View>
  );
}
