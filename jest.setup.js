import { NativeModules } from 'react-native';

NativeModules.ReactLocalization = {
  language: 'en',
};

require('./node_modules/react-native-reanimated/src/reanimated2/jestUtils').setUpTests();

jest.mock('react-native-bootsplash', () => ({
  hide: jest.fn().mockResolvedValueOnce(),
  show: jest.fn().mockResolvedValueOnce(),
  getVisibilityStatus: jest.fn().mockResolvedValue('hidden'),
}));

jest.mock('react-native-config', () => ({
  Config: {
    // Run `TMDB_API_KEY=<<token>> npx jest --watchAll to test against the TMDB API.
    TMDB_API_KEY: process.env.TMDB_API_KEY,
    API_BASE_URL: process.env.API_BASE_URL || 'https://api.themoviedb.org/3/',
    BUILD_VARIANT: 'TEST',
  },
}));

// Silence the warning: Animated: `useNativeDriver` is not supported
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
