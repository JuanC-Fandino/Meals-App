/* react imports */
import React from 'react';
import { Text, View } from 'react-native';
import { MealDetailsStyle } from './MealDetails.style';
import Meal from '../../models/meal';

export interface Props {
  TheMeal: Meal;
}

const MealDetails = (props: Props) => {
  const { TheMeal } = props;

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <View style={MealDetailsStyle.extraInfoContainer}>
      <Text style={MealDetailsStyle.detailItem}>
        {TheMeal.duration.toString()}m
      </Text>
      <Text style={MealDetailsStyle.detailItem}>
        {capitalize(TheMeal.complexity)}
      </Text>
      <Text style={MealDetailsStyle.detailItem}>
        {capitalize(TheMeal.affordability)}
      </Text>
    </View>
  );
};

export default MealDetails;
