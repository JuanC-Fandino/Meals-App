/* react imports */
import React, { useLayoutEffect } from 'react';
import { View } from 'react-native';
import { MealsOverviewStyle } from './MealsOverview.style';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CATEGORIES, MEALS } from '../../data/data';
import MealsList from '../../components/MealsList/MealsList';

const MealsOverviewScreen = (): JSX.Element => {
  /* props & state */

  const route = useRoute();
  const navigation = useNavigation();

  // The name of the param should match with the one given in the previous screen
  let categoryId = 'No hay';
  if (route.params) {
    categoryId = route.params.categoryId;
  }

  // useLayoutEffect is used to set the title of the screen in the header
  // instead of useEffect and that is because the
  // title is set before the screen is rendered

  useLayoutEffect(() => {
    // Sets the title of the screen
    navigation.setOptions({
      // @ts-ignore
      title: CATEGORIES.find(category => category.id === categoryId).title,
    });
  }, [categoryId, navigation]);

  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.includes(categoryId);
  });

  return (
    <View
      style={MealsOverviewStyle.container}
      data-testid="meals-overview-screen">
      <MealsList displayedMeals={displayedMeals}></MealsList>
    </View>
  );
};

export default MealsOverviewScreen;
