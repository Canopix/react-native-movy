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
    marginRight: 10,
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
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    padding: 3,
    backgroundColor: 'gray',
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
  title: {
    color: 'white',
    fontSize: 32,
    paddingRight: 10,
    fontWeight: 'bold',
    width: '60%',
  },
  overviewContainer: {
    width: '100%',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  overview: {
    color: '#546f75',
    fontSize: 16,
    textAlign: 'justify',
    fontWeight: 'bold',
    marginTop: 10,
  },
  backContainer: {
    width: '100%',
    position: 'absolute',
    top: 60,
    left: 40,
  },
  back: { color: 'white', fontWeight: 'bold', fontSize: 15 },
});
