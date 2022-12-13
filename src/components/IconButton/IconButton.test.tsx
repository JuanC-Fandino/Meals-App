import React from 'react';
import {render} from '@testing-library/react-native';
import IconButton from './IconButton';

test('IconButton: renders without crashing', async () => {
  const result = render(<IconButton />)

  expect(result).toBeTruthy();
});
