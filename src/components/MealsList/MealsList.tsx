import React from 'react';
import { FlatList } from 'react-native';
import Meal from '../../models/meal';
import MealItem from '../MealItem';
import { useNavigation } from '@react-navigation/native';

export interface Props {
  displayedMeals: Meal[];
}

const MealsList = (props: Props) => {
  /* props & state */
  const { displayedMeals } = props;

  const navigation = useNavigation();

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

  return <FlatList data={displayedMeals} renderItem={renderMealItem} />;
};

export default MealsList;
