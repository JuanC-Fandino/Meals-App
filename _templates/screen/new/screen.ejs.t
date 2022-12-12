---
to: src/screens/<%= type %>/<%= name %>/<%= name %>.screen.tsx
---
/* react imports */
import React from 'react';
import {View} from 'react-native';
import {<%= name %>Style} from './<%= name %>.style';
/* 3rd-party dependency imports */
/* UI components */
/* store */
/* hooks */
/* constants & types */
/* utils */

/**
 * @page <%= name %>
 * @description ADD SCREEN DOCUMENTATION HERE
 */
const <%= name %> = (): JSX.Element => {
  /* props & state */
  /* Functions & Callbacks */
  /* Side Effects & Event Listeners */
  /* Event Handlers */
  /* JSX functions */

  return (
	<View 
		data-testid="<%= name.replace(/[A-Z]/g, (match, offset) => (offset > 0 ? '-' : '') + match.toLowerCase())%>">
	</View>
);
};

export default <%= name %>;
