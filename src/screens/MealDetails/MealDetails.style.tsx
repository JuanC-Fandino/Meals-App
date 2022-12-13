import { StyleSheet } from 'react-native';

export const MealDetailsStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
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
  extraInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
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
  dividerContainer: {
    marginBottom: 16,
    paddingTop: 4,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  listOuterContainer: {
    marginVertical: 4,
    backgroundColor: 'lightgray',
    borderRadius: 8,
    padding: 8,
  },
});
