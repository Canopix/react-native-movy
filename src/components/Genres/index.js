import React from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { TextStyles } from '@/theme';

const Genres = ({ genres }) => {
  const { colors } = useTheme();

  if (!genres) return null;
  return (
    <View style={{ display: 'flex', flexDirection: 'row' }}>
      {genres.map(genre => (
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
          <Text style={[TextStyles.label, { color: colors.text }]}>
            {genre.name}
          </Text>
          <Text
            style={[
              TextStyles.label,
              { color: colors.text, marginHorizontal: 10 },
            ]}
          >
            •
          </Text>
        </View>
      ))}
    </View>
  );
};

export default Genres;
