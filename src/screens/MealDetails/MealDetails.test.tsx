import React from 'react';
import { render } from '@testing-library/react-native';
import MealDetailsScreen from './MealDetails.screen';

test('MealDetails: renders without crashing', async () => {
  const result = render(<MealDetailsScreen />);

  expect(result).toBeTruthy();
});
