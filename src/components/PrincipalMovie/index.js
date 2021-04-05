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

const PrincipalMovie = ({ movie }) => {
  const { colors } = useTheme();
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
              <Text style={styles.textLabel}>MOVY ORIGINAL</Text>
            </View>
            <View style={styles.itemsContainer}>
              <View style={styles.itemsSubContainer}>
                <FontAwesomeIcon icon={faPlus} style={styles.icon} size={32} />
                <Text style={styles.itemText}>My List</Text>
              </View>
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
