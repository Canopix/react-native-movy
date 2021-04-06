import React from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { TextStyles } from '@/theme';

const MAX_GENRE = 3;

const Genres = ({ genres }) => {
  const { colors } = useTheme();

  if (!genres) return null;

  return (
    <View style={styles.container}>
      {genres.map(
        (genre, index) =>
          index < MAX_GENRE && (
            <View style={styles.item}>
              <Text style={[TextStyles.label, { color: colors.text }]}>
                {genre.name}
              </Text>
              {index + 1 !== MAX_GENRE && (
                <Text
                  style={[
                    TextStyles.label,
                    { color: colors.text, marginHorizontal: 10 },
                  ]}
                >
                  •
                </Text>
              )}
            </View>
          )
      )}
    </View>
  );
};

export default Genres;
