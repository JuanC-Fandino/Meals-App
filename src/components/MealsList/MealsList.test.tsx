import React from 'react';
import {render} from '@testing-library/react-native';
import MealsList from './MealsList';

test('MealsList: renders without crashing', async () => {
  const result = render(<MealsList />)

  expect(result).toBeTruthy();
});
