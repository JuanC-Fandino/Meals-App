/* react imports */
import React, { useLayoutEffect } from 'react';
import { FlatList, View } from 'react-native';
import { MealsOverviewStyle } from './MealsOverview.style';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CATEGORIES, MEALS } from '../../data/data';
import Meal from '../../models/meal';
import MealItem from '../../components/MealItem/MealItem';

const MealsOverviewScreen = (): JSX.Element => {
  /* props & state */

  const route = useRoute();
  const navigation = useNavigation();

  // The name of the param should match with the one given in the previous screen
  let categoryId = 'No hay';
  if (route.params) {
    categoryId = route.params.categoryId;
  }

  // useLayoutEffect is used to set the title of the screen in the header instead of useEffect and that is because the
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

  function renderMealItem(itemData: {
    item: Meal;
    index: number;
    separators: object;
  }) {
    function handleMealDetails() {
      navigation.navigate(
        'MealDetails' as never,
        {
          mealTitle: itemData.item.title,
          mealId: itemData.item.id,
        } as never,
      );
    }
    return <MealItem TheMeal={itemData.item} onPress={handleMealDetails} />;
  }
  /* Functions & Callbacks */
  /* Side Effects & Event Listeners */
  /* Event Handlers */
  /* JSX functions */

  return (
    <View
      style={MealsOverviewStyle.container}
      data-testid="meals-overview-screen">
      <FlatList data={displayedMeals} renderItem={renderMealItem} />
    </View>
  );
};

export default MealsOverviewScreen;
