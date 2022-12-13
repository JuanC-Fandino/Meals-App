/* react imports */
import React, { useContext, useLayoutEffect } from 'react';
import { Button, Image, ScrollView, Text, View } from 'react-native';
import { MealDetailsStyle } from './MealDetails.style';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MEALS } from '../../data/data';
import MealDetails from '../../components/MealDetails/MealDetails';
import IconButton from '../../components/IconButton';
import { FavoritesContext } from '../../store/context/favorites-context';

/**
 * @page MealDetails
 * @description ADD SCREEN DOCUMENTATION HERE
 */
const MealDetailsScreen = (): JSX.Element => {
  const navigate = useNavigation();
  const route = useRoute();
  const favoriteMealsCtx = useContext(FavoritesContext);

  const mealId = route.params.mealId;
  const mealTitle = route.params.mealTitle;
  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  const TheMeal = MEALS.find(Meal => {
    return Meal.id === mealId;
  });

  function handleFavorite() {
    // It changes the favorite state
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId);
    } else {
      favoriteMealsCtx.addFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    if (!route.params) {
      navigate.goBack();
    }
    navigate.setOptions({
      title: mealTitle,
      headerRight: () => (
        <IconButton
          icon={mealIsFavorite ? '❌' : '⭐'}
          onPress={handleFavorite}
        />
      ),
    });
  }, [route.params, navigate, mealTitle, mealIsFavorite, handleFavorite]);

  if (TheMeal === undefined) {
    return <Text>{'There is no meal'}</Text>;
  }

  // useEffect(() => {});

  return (
    <ScrollView style={MealDetailsStyle.container} data-testid="meal-details">
      <Text style={MealDetailsStyle.title}>{TheMeal.title}</Text>
      <Image
        style={MealDetailsStyle.image}
        source={{ uri: TheMeal.imageUrl }}
      />
      <MealDetails TheMeal={TheMeal} />
      <View style={MealDetailsStyle.dividerContainer}>
        <Text style={MealDetailsStyle.title}>Ingredients</Text>
        {TheMeal.ingredients.map(ingredient => (
          <View key={ingredient} style={MealDetailsStyle.listOuterContainer}>
            <Text>{ingredient}</Text>
          </View>
        ))}
      </View>
      <View style={MealDetailsStyle.dividerContainer}>
        <Text style={MealDetailsStyle.title}>Steps</Text>
        {TheMeal.steps.map((step, index) => (
          <View key={step} style={MealDetailsStyle.listOuterContainer}>
            <Text>{`${index + 1}. ${step}`}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;
