import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    height: 350,
  },
  subcontainer: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
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
    marginTop: 20,
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
    color: '#0578FF',
    opacity: 1,
    fontWeight: '700',
  },
  textLabel: { color: '#0578FF', opacity: 1, fontWeight: '700' },
  itemsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginTop: 32,
  },
  itemsSubContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    color: 'white',
    fontWeight: '500',
    marginTop: 10,
  },
  iconLabel: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
