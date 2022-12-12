/* react imports */
import React, { useLayoutEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { MealDetailsStyle } from './MealDetails.style';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MEALS } from '../../data/data';
import MealDetails from '../../components/MealDetails/MealDetails';
/* 3rd-party dependency imports */
/* UI components */
/* store */
/* hooks */
/* constants & types */
/* utils */

/**
 * @page MealDetails
 * @description ADD SCREEN DOCUMENTATION HERE
 */
const MealDetailsScreen = (): JSX.Element => {
  /* props & state */
  /* Functions & Callbacks */
  /* Side Effects & Event Listeners */
  /* Event Handlers */
  /* JSX functions */
  const navigate = useNavigation();
  const route = useRoute();

  const mealId = route.params.mealId;
  const mealTitle = route.params.mealTitle;
  const TheMeal = MEALS.find(Meal => {
    return Meal.id === mealId;
  });

  useLayoutEffect(() => {
    navigate.setOptions({
      title: mealTitle,
    });
  });

  if (TheMeal === undefined) {
    return <Text>{'There is no meal'}</Text>;
  }

  // useEffect(() => {});

  return (
    <View style={MealDetailsStyle.container} data-testid="meal-details">
      <View>
        <Image
          style={MealDetailsStyle.image}
          source={{ uri: TheMeal.imageUrl }}
        />
        <Text style={MealDetailsStyle.title}>{TheMeal.title}</Text>
      </View>
      <MealDetails TheMeal={TheMeal} />
    </View>
  );
};

export default MealDetailsScreen;
