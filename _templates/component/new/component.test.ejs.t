---
to: src/components/<%= type %>/<%= name %>/<%= name %>.test.tsx
---
import React from 'react';
import {render} from '@testing-library/react-native';
import <%= name %> from './<%= name %>';

test('<%= name %>: renders without crashing', async () => {
  const result = render(<<%= name %> />)

  expect(result).toBeTruthy();
});
