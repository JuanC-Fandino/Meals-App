/* react imports */
import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import Meal from '../../models/meal';
import { MealItemStyle } from './MealItem.style';
import MealDetails from '../MealDetails/MealDetails';

export interface Props {
  TheMeal: Meal;
  onPress: () => void;
}

const MealItem = (props: Props) => {
  const { TheMeal, onPress } = props;

  return (
    <View style={[MealItemStyle.mealItem]}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: 'gray' }}
        style={({ pressed }) => [
          MealItemStyle.button,
          pressed ? MealItemStyle.buttonPressed : null,
        ]}>
        <View style={MealItemStyle.innerContainer}>
          <View>
            {/*When we import an image from the web, we need to specify the width and height*/}
            <Image
              style={MealItemStyle.image}
              source={{ uri: TheMeal.imageUrl }}
            />
            <Text style={MealItemStyle.title}>{TheMeal.title}</Text>
          </View>
          <MealDetails TheMeal={TheMeal} />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;
