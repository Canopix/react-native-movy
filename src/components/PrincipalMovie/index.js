import React from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faInfoCircle,
  faPlayCircle,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { styles } from './styles';
import { TextStyles } from '@/theme';

const lastMovie = {
  adult: false,
  backdrop_path: '/iopYFB1b6Bh7FWZh3onQhph1sih.jpg',
  genre_ids: [28, 878],
  id: 399566,
  original_language: 'en',
  original_title: 'Godzilla vs. Kong',
  overview:
    'In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.',
  popularity: 11701.435,
  poster_path: '/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg',
  release_date: '2021-03-24',
  title: 'Godzilla vs. Kong',
  video: false,
  vote_average: 8.7,
  vote_count: 1236,
};

const PrincipalMovie = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: `https://image.tmdb.org/t/p/original/${lastMovie.poster_path}`,
        }}
        style={styles.backgroundImage}
      >
        <LinearGradient
          colors={['transparent', 'black']}
          style={styles.linearGradient}
        >
          <View
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              position: 'absolute',
              bottom: 10,
            }}
          >
            <View style={styles.items}>
              <Text style={[TextStyles.label, { color: colors.text }]}>
                Kids
              </Text>
              <Text style={[TextStyles.label, { color: colors.text }]}>•</Text>
              <Text style={[TextStyles.label, { color: colors.text }]}>
                Fantasy Movie
              </Text>
              <Text style={[TextStyles.label, { color: colors.text }]}>•</Text>
              <Text style={[TextStyles.label, { color: colors.text }]}>
                Action
              </Text>
            </View>
            <View style={styles.movyLabel}>
              <Text
                style={[
                  TextStyles.label,
                  { color: '#0578FF', opacity: 1, fontWeight: '700' },
                ]}
              >
                MOVY ORIGINAL
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '80%',
                marginTop: 32,
              }}
            >
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <FontAwesomeIcon icon={faPlus} style={styles.icon} size={32} />
                <Text
                  style={{
                    color: colors.text,
                    fontWeight: '500',
                    marginTop: 10,
                  }}
                >
                  My List
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <FontAwesomeIcon
                  icon={faPlayCircle}
                  style={styles.icon}
                  size={32}
                />
                <Text
                  style={{
                    color: colors.text,
                    fontWeight: '500',
                    alignItems: 'center',
                    marginTop: 10,
                  }}
                >
                  Play
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  style={styles.icon}
                  size={32}
                />
                <Text
                  style={{
                    color: colors.text,
                    fontWeight: '500',
                    marginTop: 10,
                  }}
                >
                  Info
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default PrincipalMovie;
