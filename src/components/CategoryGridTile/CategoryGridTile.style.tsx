import { Platform, StyleSheet } from 'react-native';

// Is necessary to have a background color for the iOS shadows to have effect
export const CategoryGridTileStyle = StyleSheet.create({
  outerContainer: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },

  button: {
    flex: 1,
  },

  buttonPressed: {
    opacity: 0.5,
  },

  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
});
