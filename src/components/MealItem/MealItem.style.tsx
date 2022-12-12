import { StyleSheet } from 'react-native';

export const MealItemStyle = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
    margin: 8,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  innerContainer: {
    overflow: 'hidden',
    borderRadius: 8,
  },
  button: {
    flex: 1,
  },

  buttonPressed: {
    opacity: 0.5,
  },
});
