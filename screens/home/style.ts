import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 120,
  },
  photoFirst: {
    zIndex: 1,
    height: 200,
    width: 200,
    borderRadius: 20,
    transform: [
      { translateX: 20 },
      { translateY: 80 },
      { rotate: '-15deg' },
    ],
  },
  photoSecond: {
    zIndex: 1,
    height: 220,
    width: 220,
    borderRadius: 20,
    position: 'absolute',
    top: 50,
    right: 50,
    transform: [
      { translateX: 20 },
      { translateY: 80 },
      { rotate: '15deg' },
    ],
  },
  photoThird: {
    zIndex: 0,
    height: 220,
    width: 220,
    borderRadius: 20,
    position: 'absolute',
    top: 140,
    left: 60,
    transform: [
      { translateX: 20 },
      { translateY: 80 },
      { rotate: '-5deg' },
    ],
  },
  text: {
    fontSize: 20,
    fontWeight: '800',
    color: 'black',
    marginBottom: 30,
  },
});
