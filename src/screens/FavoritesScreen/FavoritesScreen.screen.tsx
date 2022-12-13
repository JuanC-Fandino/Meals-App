/* react imports */
import React from 'react';
import { Text, View } from 'react-native';
import { FavoritesScreenStyle } from './FavoritesScreen.style';
import MealsList from '../../components/MealsList';
// import { FavoritesContext } from '../../store/context/favorites-context';
import { MEALS } from '../../data/data';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/redux/store';

/**
 * @page FavoritesScreen
 * @description ADD SCREEN DOCUMENTATION HERE
 */
const FavoritesScreen = (): JSX.Element => {
  /* props & state */
  // const favoriteMealsContext = useContext(FavoritesContext);
  const favoriteMealsIds = useSelector(
    (state: RootState) => state.favorites.ids,
  );

  const favoriteMeals = MEALS.filter(meal =>
    // favoriteMealsContext.ids.includes(meal.id),
    favoriteMealsIds.includes(meal.id),
  );

  return (
    <View style={FavoritesScreenStyle.container} data-testid="favorites-screen">
      {favoriteMeals.length > 0 ? (
        <MealsList displayedMeals={favoriteMeals} />
      ) : (
        <Text style={FavoritesScreenStyle.emptyStyle}>
          {'No favorites yet'}
        </Text>
      )}
    </View>
  );
};

export default FavoritesScreen;
