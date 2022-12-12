import React from 'react';
import { render } from '@testing-library/react-native';
import MealsOverviewScreen from './MealsOverview.screen';

test('MealsOverviewScreen: renders without crashing', async () => {
  const result = render(<MealsOverviewScreen />);

  expect(result).toBeTruthy();
});
