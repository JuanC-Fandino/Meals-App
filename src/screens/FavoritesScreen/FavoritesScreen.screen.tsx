/* react imports */
import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { FavoritesScreenStyle } from './FavoritesScreen.style';
import MealsList from '../../components/MealsList';
import { FavoritesContext } from '../../store/context/favorites-context';
import { MEALS } from '../../data/data';
/* 3rd-party dependency imports */
/* UI components */
/* store */
/* hooks */
/* constants & types */
/* utils */

/**
 * @page FavoritesScreen
 * @description ADD SCREEN DOCUMENTATION HERE
 */
const FavoritesScreen = (): JSX.Element => {
  /* props & state */
  const favoriteMealsContext = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter(meal =>
    favoriteMealsContext.ids.includes(meal.id),
  );

  return (
    <View style={FavoritesScreenStyle.container} data-testid="favorites-screen">
      {favoriteMeals.length > 0 ? (
        <MealsList displayedMeals={favoriteMeals}></MealsList>
      ) : (
        <Text style={FavoritesScreenStyle.emptyStyle}>
          {'No favorites yet'}
        </Text>
      )}
    </View>
  );
};

export default FavoritesScreen;
