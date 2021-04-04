import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    height: '50%',
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    opacity: 0.95,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
    fontSize: 64,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
  },
  items: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  movyLabel: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: 'rgba(5, 120, 255, 0.29)',
    padding: 5,
    borderRadius: 5,
    width: '60%',
    justifyContent: 'center',
  },
});
