---
to: src/screens/<%= type %>/<%= name %>/<%= name %>.test.tsx
---
import React from 'react';
import {render} from '@testing-library/react-native';
import <%= name %> from './<%= name %>.screen';

test('<%= name %>: renders without crashing', async () => {
  const result = render(<<%= name %> />);

  expect(result).toBeTruthy();
});