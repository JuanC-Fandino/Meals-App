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

  return (
    <View style={MealDetailsStyle.extraInfoContainer}>
      <Text style={MealDetailsStyle.detailItem}>
        {TheMeal.duration.toString()}m
      </Text>
      <Text style={MealDetailsStyle.detailItem}>
        {TheMeal.complexity.toUpperCase()}
      </Text>
      <Text style={MealDetailsStyle.detailItem}>
        {TheMeal.affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetails;
