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

export function Details({ route, navigation }) {
  const { movie } = route.params;
  const { colors } = useTheme();
  console.group('movie');
  console.log(movie);
  console.groupEnd();

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
