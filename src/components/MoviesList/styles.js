import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  text: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 15,
  },
  image: {
    height: 175,
    width: 125,
  },
  scrollView: {
    padding: 10,
  },
  emptyView: {
    height: 195,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
